const Cloud = () => {
  return (
    <>
      <title>Cloud | Plexcord</title>
      <meta name="keywords" content="plexcord cloud, plexcord cloud github" />
      <div
        className="content-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          flex: "1",
          margin: "0 auto",
        }}
      >
        <h1>Cloud</h1>
        <p>Now in Plexcord</p>
        <p style={{ margin: "1rem 0" }}>
          Plexcord just got a brand new feature! With cloud integration, you can
          enjoy some amazing features. It&apos;s completely optional and
          respects your privacy!
        </p>

        <h1>Features</h1>
        <ul style={{ listStyleType: "disc", margin: "1rem 2rem" }}>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Synchronize Your Settings:</strong> Use the same settings
            across all your devices without having to redo everything!
          </li>
          <li>
            <strong>More to Come!</strong> Stay tuned for future updates!
          </li>
        </ul>

        <h1>Getting Started</h1>
        <p style={{ margin: "1rem 0" }}>
          To start using the cloud integration, go to{" "}
          <strong>Plexcord settings</strong> and enable the{" "}
          <strong>&quot;Enable Cloud Integration&quot;</strong> option. After
          authorization, you&apos;re all set! You can now toggle specific
          features on or off.
        </p>

        <h3>Links</h3>
        <ul style={{ listStyleType: "disc", margin: "1rem 2rem" }}>
          <li style={{ marginBottom: "1rem" }}>
            <div
              className="href"
              onClick={() =>
                window.open("https://github.com/Plexcord/Backend", "_blank")
              }
            >
              Source Code
            </div>
          </li>
          <li>
            <div
              className="href"
              onClick={() =>
                window.open("https://api.plexcord.club/privacy", "_blank")
              }
            >
              Privacy Policy
            </div>
          </li>
        </ul>

        <p>Everything is easier with Plexcord!</p>
      </div>
    </>
  );
};

export default Cloud;
