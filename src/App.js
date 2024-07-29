import './App.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { useEffect, useRef } from 'react';
import { RoundedBoxGeometry } from 'three/examples/jsm/Addons.js';
import icon from './textures/gyperr.png';
import micPic from './textures/dynamicMesh.avif';

function App() {

  // THREE form

  const forAdd = useRef();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('rgb(15, 21, 21)')
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000)
  camera.position.setZ(8)
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)

  useEffect(() => {

    // iPhone cast

    const geometry = new RoundedBoxGeometry(4.2, 1.1, 8, 10, 10, .1);
    const material = new THREE.MeshStandardMaterial({ color: '#00000f' });
    const mesh = new THREE.Mesh(geometry, material);


    // lights

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight('#fff', 30, 500)
    keyLight.position.set(1, -2.5, 3.5)
    scene.add(keyLight)

    const light1 = new THREE.PointLight('#fff', 50, 50)
    light1.position.set(1, 0, .1)
    scene.add(light1)

    const light2 = new THREE.PointLight('#fff', 2.5, 200)
    light2.position.set(1.5, 3.5, -3)
    scene.add(light2)

    const light3 = new THREE.PointLight('#fff', 9, 200)
    light3.position.set(4, -3.5, -5)
    scene.add(light3)

    const light4 = new THREE.PointLight('#fff', 5, 200)
    light4.position.set(4, 0, -3)
    scene.add(light4)

    const light5 = new THREE.PointLight('#fff', 5, 200)
    light5.position.set(-4, 0, 3)
    scene.add(light5)


    scene.add(mesh);

    // form of iPhone;

    mesh.geometry.center();
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false;


    // iPhone screen

    const screengeo = new RoundedBoxGeometry(4.1, 1.1, 7.9, 20, 5, 5);
    const screenmat = new THREE.MeshStandardMaterial({ color: '#000' });
    const screen = new THREE.Mesh(screengeo, screenmat);
    screen.position.set(0, .028, 0);
    mesh.rotation.x = -Math.PI / 2;
    mesh.add(screen)


    // iPhone logo in back

    const iconGeo = new THREE.PlaneGeometry(1.45, 1.45);
    const iconMat = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(icon) });
    const iconmesh = new THREE.Mesh(iconGeo, iconMat);
    iconmesh.position.set(0, -.6, .15)
    iconmesh.rotation.x = -Math.PI / 2;
    iconmesh.rotation.y = -Math.PI;
    iconmesh.rotation.z = -Math.PI;
    mesh.add(iconmesh)

    // Camera site

    const forCamGeo = new RoundedBoxGeometry(2, 1, 2, 20, 5, 5)
    const forCamMat = new THREE.MeshStandardMaterial({ color: '#000013' });
    const CameraPlace = new THREE.Mesh(forCamGeo, forCamMat);
    CameraPlace.position.set(-.9, -.17, 2.8)
    mesh.add(CameraPlace);

    // Camera's things

    const FirstCameraGeo = new THREE.CylinderGeometry(.385, .385, 1, 64)
    const FirstCameraMat = new THREE.MeshStandardMaterial({
      color: '#0d0d1f',
      transparent: true,
      opacity: .65
    });
    const FirstCamera = new THREE.Mesh(FirstCameraGeo, FirstCameraMat);
    FirstCamera.position.set(-.35, -.04, .3)

    const forFirstGeo = new THREE.CylinderGeometry(.07, .07, 1, 64)
    const forFirstMat = new THREE.MeshStandardMaterial({
      color: '#170041',
      transparent: true,
      opacity: .2
    });
    const forFirst = new THREE.Mesh(forFirstGeo, forFirstMat);
    forFirst.position.set(0, -.02, 0)

    FirstCamera.add(forFirst)

    CameraPlace.add(FirstCamera);


    const SecondCameraGeo = new THREE.CylinderGeometry(.385, .385, 1, 64)
    const SecondCameraMat = new THREE.MeshStandardMaterial({
      color: '#0d0d1f',
      transparent: true,
      opacity: .65
    });
    const SecondCamera = new THREE.Mesh(SecondCameraGeo, SecondCameraMat);
    SecondCamera.position.set(.335, -.04, -.3)

    const forSecondGeo = new THREE.CylinderGeometry(.11, .11, 1, 64)
    const forSecondMat = new THREE.MeshStandardMaterial({
      color: '#170041',
      transparent: true,
      opacity: .2
    });
    const forSecond = new THREE.Mesh(forSecondGeo, forSecondMat);
    forSecond.position.set(0, -.02, 0)

    SecondCamera.add(forSecond)

    CameraPlace.add(SecondCamera);

    const flashLightGeo = new THREE.CylinderGeometry(.14, .14, 1, 64)
    const flashLightMat = new THREE.MeshStandardMaterial({
      color: 'rgb(253, 255, 215)',
      transparent: true,
      opacity: .3
    });
    const flashLight = new THREE.Mesh(flashLightGeo, flashLightMat);
    flashLight.position.set(.35, -.015, .4)
    CameraPlace.add(flashLight)

    const dotGeo = new THREE.CylinderGeometry(.09, .09, 1, 64)
    const dotMat = new THREE.MeshStandardMaterial({
      color: '#000'
    });
    const dot = new THREE.Mesh(dotGeo, dotMat);
    dot.position.set(-.4, -.02, -.4)
    CameraPlace.add(dot)

    // front side things

    const FrontCamGeo = new THREE.CylinderGeometry(.095, .095, 1, 64)
    const FrontCamMat = new THREE.MeshStandardMaterial({
      color: '#303030',
      transparent: true,
      opacity: .3
    });
    const FrontCam = new THREE.Mesh(FrontCamGeo, FrontCamMat);
    FrontCam.position.set(.55, .1, 3.5);
    mesh.add(FrontCam);

    const DinamicGeo = new THREE.PlaneGeometry(.6, .09, 4, 4)
    const DinamicMat = new THREE.MeshStandardMaterial({
      color: '#090909',
      wireframe: true,
      transparent: true,
      opacity: .25
    });
    const Dinamic = new THREE.Mesh(DinamicGeo, DinamicMat);
    Dinamic.position.set(0, .58, 3.55)
    Dinamic.rotation.x = -Math.PI / 2;
    mesh.add(Dinamic);


    // control Buttons 

    const turnerGeo = new RoundedBoxGeometry(.3, .3, 1.3, 5, 100)
    const turnerMat = new THREE.MeshStandardMaterial({color: '#00000f'})
    const turner = new THREE.Mesh(turnerGeo, turnerMat)
    turner.position.set(-2, 0, 1.1)
    mesh.add(turner)

    const volUpGeo = new RoundedBoxGeometry(.3, .3, .8, 5, 100)
    const volUpMat = new THREE.MeshStandardMaterial({color: '#00000f'})
    const volUp = new THREE.Mesh(volUpGeo, volUpMat)
    volUp.position.set(2, 0, .75)
    mesh.add(volUp)

    const volDowGeo = new RoundedBoxGeometry(.3, .3, .8, 5, 100)
    const volDowMat = new THREE.MeshStandardMaterial({color: '#00000f'})
    const volDow = new THREE.Mesh(volDowGeo, volDowMat)
    volDow.position.set(2, 0, 1.6)
    mesh.add(volDow)

    function an() {
      requestAnimationFrame(an);
      renderer.render(scene, camera)

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      controls.update()
    }
    an()

    forAdd.current.appendChild(renderer.domElement)
  }, [])

  return (
    <div className="App" ref={forAdd}>

    </div>
  );
}

export default App;
