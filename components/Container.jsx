export default function Container({children}) {
  return (
    <>
      <div className="container">
        {children}
      </div>
      <style jsx>{`
        .container {
          margin: 0 auto;
          max-width: var(--container-width, 960px);
          padding: 0 var(--container-padding, 1rem);
        }
      `}</style>
    </>
  );
}
