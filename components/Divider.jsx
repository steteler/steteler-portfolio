import styles from '@styles/Divider.module.css';

export default function Divider({ color }) {
  return (
    <svg className={styles.component__divider} width="1420" height="45" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 0L111.962 45H8.03848L60 0Z" fill={color} />
      <path d="M160 0L211.962 45H108.038L160 0Z" fill={color} />
      <path d="M260 0L311.962 45H208.038L260 0Z" fill={color} />
      <path d="M360 0L411.962 45H308.038L360 0Z" fill={color} />
      <path d="M460 0L511.962 45H408.038L460 0Z" fill={color} />
      <path d="M560 0L611.962 45H508.038L560 0Z" fill={color} />
      <path d="M660 0L711.962 45H608.038L660 0Z" fill={color} />
      <path d="M760 0L811.962 45H708.038L760 0Z" fill={color} />
      <path d="M860 0L911.962 45H808.038L860 0Z" fill={color} />
      <path d="M960 0L1011.96 45H908.038L960 0Z" fill={color} />
      <path d="M1060 0L1111.96 45H1008.04L1060 0Z" fill={color} />
      <path d="M1160 0L1211.96 45H1108.04L1160 0Z" fill={color} />
      <path d="M1260 0L1311.96 45H1208.04L1260 0Z" fill={color} />
      <path d="M1360 0L1411.96 45H1308.04L1360 0Z" fill={color} />
    </svg>
  );
}
