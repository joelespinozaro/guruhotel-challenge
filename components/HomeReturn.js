import Link from "next/link";

export default function HomeReturn() {
  return (
    <Link href="/">
      <a
        style={{
          position: "absolute",
          left: 20,
          top: 20,
          fontSize: 18,
          color: "white",
          fontWeight: 700,
        }}
      >
        Regresar
      </a>
    </Link>
  );
}
