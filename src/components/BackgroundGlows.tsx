type Variant = "hero" | "about";

export default function BackgroundGlows({ variant }: { variant: Variant }) {
  if (variant === "hero") {
    return (
      <>
        <div
          className="pointer-events-none fixed -z-10"
          style={{
            top: "80px",
            right: "160px",
            width: "320px",
            height: "280px",
            background: "radial-gradient(58% 58% at 60% 40%, rgba(0,213,190,0.28), transparent)",
            filter: "blur(174px)",
          }}
        />
        <div
          className="pointer-events-none fixed -z-10"
          style={{
            top: "340px",
            right: "80px",
            width: "380px",
            height: "220px",
            background: "radial-gradient(56% 56% at 70% 65%, rgba(97,95,255,0.26), transparent)",
            filter: "blur(174px)",
          }}
        />
      </>
    );
  }

  // about
  return (
    <>
      <div
        className="pointer-events-none fixed -z-10"
        style={{
          top: "60px",
          left: "2%",
          width: "560px",
          height: "420px",
          background: "radial-gradient(58% 58% at 60% 40%, rgba(0,136,255,0.26), transparent)",
          filter: "blur(174px)",
        }}
      />
      <div
        className="pointer-events-none fixed -z-10"
        style={{
          top: "280px",
          left: "36%",
          width: "700px",
          height: "360px",
          background: "radial-gradient(56% 56% at 70% 65%, rgba(0,136,255,0.18), transparent)",
          filter: "blur(174px)",
        }}
      />
    </>
  );
}


