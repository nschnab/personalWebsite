import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Castle sand is wet (darker, slightly more saturated); mound base stays dry
const SAND       = 0xa8906e  // wet sand — primary castle surfaces
const SAND_DARK  = 0x8e7858  // wet sand — recessed / shadow areas
const SAND_MOUND = 0xcab88a  // dry sand — base mound (unchanged)
const FLAG_RED   = 0xcc2020

export default function CastleScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth
    const H = mount.clientHeight

    /* ── Renderer ─────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setClearColor(0x000000, 0)   // transparent – blends with page bg
    mount.appendChild(renderer.domElement)

    /* ── Scene ─────────────────────────────────────────── */
    const scene = new THREE.Scene()

    /* ── Camera ────────────────────────────────────────── */
    const camera = new THREE.PerspectiveCamera(48, W / H, 0.1, 200)
    camera.position.set(0, 7, 26)
    camera.lookAt(0, 2.5, 0)

    /* ── Materials ─────────────────────────────────────── */
    const sandMat  = new THREE.MeshLambertMaterial({ color: SAND })
    const darkMat  = new THREE.MeshLambertMaterial({ color: SAND_DARK })
    const moundMat = new THREE.MeshLambertMaterial({ color: SAND_MOUND })
    const voidMat  = new THREE.MeshLambertMaterial({ color: 0x8a7050 })  // window void
    const flagMat  = new THREE.MeshLambertMaterial({ color: FLAG_RED, side: THREE.DoubleSide })
    const poleMat  = new THREE.MeshLambertMaterial({ color: SAND_DARK })

    /* ── Helper builders ───────────────────────────────── */
    const castle = new THREE.Group()

    const cyl = (rTop, rBot, h, segs, mat, x, y, z) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, segs), mat)
      m.position.set(x, y, z)
      m.castShadow = true
      castle.add(m)
      return m
    }

    const box = (w, h, d, mat, x, y, z, ry = 0) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
      m.position.set(x, y, z)
      m.rotation.y = ry
      m.castShadow = true
      castle.add(m)
      return m
    }

    // Row of battlements along a line (local to castle group)
    const battleRow = (count, spacing, y, cx, cz, ry = 0) => {
      for (let i = 0; i < count; i++) {
        const offset = (i - (count - 1) / 2) * spacing
        const cos = Math.cos(ry), sin = Math.sin(ry)
        box(0.55, 0.55, 0.55, sandMat,
          cx + cos * offset, y, cz + sin * offset)
      }
    }

    // Circular ring of battlements on a tower top
    const battleRing = (count, r, y, cx, cz) => {
      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2
        box(0.5, 0.55, 0.5, sandMat,
          cx + Math.cos(a) * r, y, cz + Math.sin(a) * r)
      }
    }

    // Arched window: dark rect + even darker narrow "slit"
    const archWindow = (cx, cy, cz, ry = 0) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.9, 0.25), voidMat)
      m.position.set(cx, cy, cz)
      m.rotation.y = ry
      castle.add(m)
      // arch top: small half-cylinder suggestion
      const arc = new THREE.Mesh(new THREE.CylinderGeometry(0.275, 0.275, 0.25, 8, 1, false, 0, Math.PI), voidMat)
      arc.rotation.z = Math.PI / 2
      arc.rotation.y = ry
      arc.position.set(cx, cy + 0.45, cz)
      castle.add(arc)
    }

    /* ── Sand mound ────────────────────────────────────── */
    const moundGeo = new THREE.SphereGeometry(9, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2)
    const mound = new THREE.Mesh(moundGeo, moundMat)
    mound.scale.y = 0.3
    mound.position.y = -0.5
    mound.receiveShadow = true
    castle.add(mound)

    /* ── Flat courtyard platform ───────────────────────── */
    const platGeo = new THREE.CylinderGeometry(6.5, 6.5, 0.35, 32)
    const plat = new THREE.Mesh(platGeo, sandMat)
    plat.position.y = 0.0
    plat.receiveShadow = true
    castle.add(plat)

    /* ══════════════════════════════════════════════════════
       TOWERS
       ══════════════════════════════════════════════════════ */

    // — Left main tower (wide, chunky) —
    const LX = -3.2, LZ = 0
    cyl(1.35, 1.45, 5.5, 16, sandMat, LX, 3.1, LZ)
    battleRing(10, 1.45, 6.15, LX, LZ)
    // windows
    archWindow(LX + 1.35, 2.5, LZ)
    archWindow(LX - 1.35, 2.5, LZ)
    archWindow(LX, 2.5, LZ + 1.35, Math.PI / 2)
    archWindow(LX, 2.5, LZ - 1.35, Math.PI / 2)

    // — Right main tower (similar but slightly taller) —
    const RX = 3.2, RZ = 0
    cyl(1.25, 1.4, 6.0, 16, sandMat, RX, 3.35, RZ)
    battleRing(10, 1.35, 6.7, RX, RZ)
    archWindow(RX + 1.3, 3.0, RZ)
    archWindow(RX - 1.3, 3.0, RZ)
    archWindow(RX, 3.0, RZ + 1.3, Math.PI / 2)
    archWindow(RX, 3.0, RZ - 1.3, Math.PI / 2)
    // open rectangular window near top (reference image right tower)
    const openWin = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.1, 0.3), voidMat)
    openWin.position.set(RX + 1.28, 5.2, RZ)
    castle.add(openWin)

    // — Central keep (tallest) —
    const CX = 0, CZ = -0.8
    cyl(1.15, 1.25, 7.8, 16, sandMat, CX, 4.25, CZ)
    // conical spire
    const spire = new THREE.Mesh(new THREE.ConeGeometry(1.45, 2.6, 16), sandMat)
    spire.position.set(CX, 9.45, CZ)
    spire.castShadow = true
    castle.add(spire)
    // Keep windows
    archWindow(CX + 1.2, 4.0, CZ)
    archWindow(CX - 1.2, 4.0, CZ)
    archWindow(CX, 4.0, CZ + 1.2, Math.PI / 2)
    archWindow(CX, 4.0, CZ - 1.2, Math.PI / 2)
    archWindow(CX + 1.2, 6.5, CZ)
    archWindow(CX - 1.2, 6.5, CZ)

    /* ── Flag ──────────────────────────────────────────── */
    const poleH = 2.0
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, poleH, 6), poleMat)
    pole.position.set(CX, 10.75 + poleH / 2, CZ)
    castle.add(pole)

    // Triangular pennant using Shape
    const flagShape = new THREE.Shape()
    flagShape.moveTo(0, 0)
    flagShape.lineTo(1.0, 0.3)
    flagShape.lineTo(0, 0.6)
    flagShape.closePath()
    const flagGeo = new THREE.ShapeGeometry(flagShape)
    const flagMesh = new THREE.Mesh(flagGeo, flagMat)
    flagMesh.position.set(CX, 11.72, CZ - 0.02)
    castle.add(flagMesh)

    /* ══════════════════════════════════════════════════════
       CONNECTING WALLS
       ══════════════════════════════════════════════════════ */

    // Front wall left segment (left tower → gate)
    box(1.9, 3.2, 0.55, sandMat, LX + 1.7, 1.95, 3.6, -0.2)
    // Front wall right segment (gate → right tower)
    box(1.9, 3.2, 0.55, sandMat, RX - 1.7, 1.95, 3.6, 0.2)
    // Battlements on front wall segments
    battleRow(4, 0.58, 3.75, LX + 1.7, 3.5, -0.2)
    battleRow(4, 0.58, 3.75, RX - 1.7, 3.5, 0.2)

    // Side walls (left)
    box(0.55, 3.0, 4.5, sandMat, LX - 0.9, 1.85, -1.8, 0)
    battleRow(7, 0.58, 3.55, LX - 0.9, -1.8, Math.PI / 2)
    // Side walls (right)
    box(0.55, 3.0, 4.5, sandMat, RX + 0.9, 1.85, -1.8, 0)
    battleRow(7, 0.58, 3.55, RX + 0.9, -1.8, Math.PI / 2)

    // Back wall
    box(6.5, 3.0, 0.55, sandMat, 0, 1.85, -4.8)
    battleRow(10, 0.6, 3.55, 0, -4.8)

    /* ── Gatehouse (front entrance) ─────────────────────── */
    // Gate towers (small flanking pillars)
    cyl(0.7, 0.75, 4.5, 12, sandMat, -1.0, 2.6, 3.9)
    cyl(0.7, 0.75, 4.5, 12, sandMat,  1.0, 2.6, 3.9)
    battleRing(7, 0.75, 5.15, -1.0, 3.9)
    battleRing(7, 0.75, 5.15,  1.0, 3.9)

    // Gate arch void
    const gateVoid = new THREE.Mesh(new THREE.BoxGeometry(1.3, 2.4, 0.8), voidMat)
    gateVoid.position.set(0, 1.5, 3.65)
    castle.add(gateVoid)
    const gateArc = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.8, 10, 1, false, 0, Math.PI), voidMat)
    gateArc.rotation.z = Math.PI / 2
    gateArc.position.set(0, 2.7, 3.65)
    castle.add(gateArc)

    // Gate lintel / surround
    box(1.6, 0.35, 0.85, sandMat, 0, 3.1, 3.65)

    /* ── Courtyard inner keep steps ─────────────────────── */
    box(2.0, 0.3, 2.0, darkMat, CX, 0.32, CZ + 1.0)

    /* ══════════════════════════════════════════════════════
       POSITION & ADD
       ══════════════════════════════════════════════════════ */
    castle.position.y = -3.0
    scene.add(castle)

    /* ── Lighting ───────────────────────────────────────── */
    // Strong warm ambient for the even sandy look
    scene.add(new THREE.AmbientLight(0xfff8f0, 1.2))

    // Key light from front-right-above (matches reference)
    const key = new THREE.DirectionalLight(0xfffaf0, 2.2)
    key.position.set(6, 14, 12)
    key.castShadow = true
    key.shadow.mapSize.set(1024, 1024)
    scene.add(key)

    // Soft fill from left
    const fill = new THREE.DirectionalLight(0xf0ebe0, 0.6)
    fill.position.set(-8, 6, 4)
    scene.add(fill)

    // Subtle bounce from below/front
    const bounce = new THREE.DirectionalLight(0xfff0d8, 0.3)
    bounce.position.set(0, -4, 10)
    scene.add(bounce)

    /* ── Animation ──────────────────────────────────────── */
    let animId
    let t = 0

    const animate = () => {
      animId = requestAnimationFrame(animate)
      t += 0.01
      castle.rotation.y += 0.0016
      // Flag wave
      flagMesh.rotation.y = Math.sin(t * 1.8) * 0.35
      // Very gentle camera float
      camera.position.y = 7 + Math.sin(t * 0.25) * 0.15
      renderer.render(scene, camera)
    }
    animate()

    /* ── Resize ─────────────────────────────────────────── */
    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
}
