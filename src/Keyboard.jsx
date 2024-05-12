import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';

const themes = {
  red: {
    boardColor: 0xf5cec7,
    keyColor: 0xe79796,
  },
  yellow: {
    boardColor: 0xffdca2,
    keyColor: 0xffb284,
  },
  blue: {
    boardColor: 0xb9d4db,
    keyColor: 0x478ba2,
  },
};

export default function Keyboard(props) {
  const { theme } = props;
  const { nodes, materials } = useGLTF('/keyboard.glb');
  materials.MAT_Keys.color = new THREE.Color(themes[theme].keyColor);
  materials.MAT_Plastic.color = new THREE.Color(themes[theme].boardColor);

  return (
    <group {...props} dispose={null}>
      <group scale={3} rotation={[-1.4, Math.PI + 0.2, -0.3]} position={[1.5, 2.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BARRA_INCLINADA_IZQ_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-4.449, 0, -0.287]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.UNO_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-4.036, 0, -0.287]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOS_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.623, 0, -0.287]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRES_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.21, 0, -0.287]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CUATRO_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-2.797, 0, -0.287]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CINCO_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-2.384, 0, -0.287]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SEIS_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.971, 0, -0.287]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SIETE_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.558, 0, -0.287]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OCHO_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.145, 0, -0.287]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NUEVE_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-0.732, 0, -0.287]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ZERO_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-0.319, 0, -0.287]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.INTERROGACION_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.094, 0, -0.287]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.INTERROGACION_INVER_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.507, 0, -0.287]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BORRAR_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[1.097, 0, -0.287]}
          scale={[0.75, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ENTER_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[1.159, 0, 0.09]}
          scale={[0.616, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TAB_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-4.413, 0, 0.087]}
          scale={[0.449, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Q_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.965, 0, 0.087]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.W_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.552, 0, 0.087]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.E_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.139, 0, 0.087]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.R_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-2.726, 0, 0.087]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.T_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-2.313, 0, 0.087]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Y_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.9, 0, 0.087]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.U_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.487, 0, 0.087]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.I_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.074, 0, 0.087]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.O_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-0.661, 0, 0.087]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.P_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-0.248, 0, 0.087]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ACENTO_IZQ_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.165, 0, 0.087]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ASTERISCO_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.578, 0, 0.087]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BLOQ_MAYUS_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-4.328, 0, 0.508]}
          scale={[0.622, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CORCHETE_DER_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.747, 0, 0.508]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CORCHETE_IZQ_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.334, 0, 0.508]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ENYE_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-0.079, 0, 0.508]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-0.492, 0, 0.508]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.K_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-0.905, 0, 0.508]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.J_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.318, 0, 0.508]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.H_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.731, 0, 0.508]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-2.144, 0, 0.508]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-2.557, 0, 0.508]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.D_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-2.97, 0, 0.508]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.S_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.383, 0, 0.508]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.A_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.797, 0, 0.508]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SHIFT_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-4.388, 0, 0.919]}
          scale={[0.512, 0.194, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SHIFT_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.956, 0, 0.919]}
          scale={[1.031, 0.194, 0.346]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MENOS_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.222, 0, 0.919]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PUNTO_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-0.191, 0, 0.919]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COMA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-0.604, 0, 0.919]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.N_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.43, 0, 0.919]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.M_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.017, 0, 0.919]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.B_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.843, 0, 0.919]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.V_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-2.256, 0, 0.919]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.C_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-2.669, 0, 0.919]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.X_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.082, 0, 0.919]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Z_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.495, 0, 0.919]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MAYOR_MENOR_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.908, 0, 0.919]}
          scale={[0.378, 0.203, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CTRL_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-4.388, 0, 1.342]}
          scale={[0.512, 0.194, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WINDOWS_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.839, 0, 1.342]}
          scale={[0.512, 0.194, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ALT_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.302, 0, 1.342]}
          scale={[0.512, 0.194, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ESPACIO_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.859, 0, 1.342]}
          scale={[2.362, 0.194, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ALT_GR_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-0.416, 0, 1.342]}
          scale={[0.512, 0.194, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OPCIONES_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.121, 0, 1.342]}
          scale={[0.512, 0.194, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LUZ_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.668, 0, 1.342]}
          scale={[0.512, 0.194, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CTRL_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[1.212, 0, 1.342]}
          scale={[0.512, 0.194, 0.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.INS_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[1.919, 0, -0.279]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.INICIO_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[2.314, 0, -0.279]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REPAG_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[2.709, 0, -0.279]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AVPAG_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[2.709, 0, 0.099]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FIN_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[2.314, 0, 0.099]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SUPR_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[1.921, 0, 0.099]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.UP_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[2.314, 0, 0.992]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOWN_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[2.314, 0, 1.343]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LEFT_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[1.917, 0, 1.343]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RIGHT_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[2.715, 0, 1.343]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ESC_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-4.467, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F1_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.616, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F2_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-3.219, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F3_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-2.822, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F4_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-2.425, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F5_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.746, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F6_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-1.354, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F7_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-0.961, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F8_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[-0.569, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F9_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.117, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F10_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.505, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IMPR_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[1.913, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F11_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[0.894, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.F12_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[1.284, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BLOQ_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[2.311, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PAUSA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[2.709, 0, -0.868]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BLOQ_NUM_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[3.317, 0, -0.279]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BARRA_INCLINADA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[3.727, 0, -0.279]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ASTERISCO_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[4.134, 0, -0.279]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MENOS_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[4.524, 0, -0.279]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SIETE_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[3.317, 0, 0.107]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OCHO_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[3.728, 0, 0.107]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NUEVE_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[4.134, 0, 0.107]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SEIS_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[4.136, 0, 0.514]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[3.731, 0, 0.514]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CUATRO_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[3.32, 0, 0.514]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.UNO_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[3.321, 0, 0.927]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DOS_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[3.732, 0, 0.927]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DERECHA1_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[4.134, 0, 0.927]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PUNTO_SUPR_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[4.134, 0, 1.335]}
          scale={[0.362, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ZERO_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[3.523, 0, 1.335]}
          scale={[0.78, 0.194, 0.321]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MAS_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[4.521, 0, 0.292]}
          scale={[0.362, 0.194, 0.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ENTER_DERECHA_MAT_Keys_0.geometry}
          material={materials.MAT_Keys}
          position={[4.521, 0, 1.105]}
          scale={[0.362, 0.194, 0.787]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keyboard_MAT_Plastic_0.geometry}
          material={materials.MAT_Plastic}
          position={[0, 0, 0.294]}
          scale={[9.656, 0.25, 2.945]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/keyboard.glb');
