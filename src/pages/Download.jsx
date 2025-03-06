import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
const Download = () => {
  const [copied, setCopied] = useState(false);
  const command =
    'sh -c "$(curl -sS https://raw.githubusercontent.com/Plexcord/Installer/main/install.sh)"';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      console.error("Kopyalama başarısız!", err);
    }
  };

  return (
    <>
      <div className="content-container" style={{ width: "100%", maxWidth: "1200px",flex: "1", margin: "0 auto" }}>
        <h1>Download Plexcord</h1>
        <TabGroup>
          <TabList className="download-tabs">
            <Tab>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                style={{ enableBackground: "new 0 0 50 50" }}
                xmlSpace="preserve"
              >
                <path
                  d="M19.852,7.761l-15,2.25C4.362,10.085,4,10.505,4,11v12c0,0.553,0.448,1,1,1h15c0.552,0,1-0.447,1-1V8.75
	c0-0.291-0.127-0.567-0.348-0.758C20.432,7.803,20.139,7.721,19.852,7.761z"
                />
                <path
                  d="M45.652,4.242c-0.22-0.189-0.512-0.271-0.801-0.231l-21,3.15C23.362,7.235,23,7.655,23,8.15V23c0,0.553,0.448,1,1,1h21
	c0.552,0,1-0.447,1-1V5C46,4.709,45.873,4.433,45.652,4.242z"
                />
                <path
                  d="M20,26H5c-0.552,0-1,0.447-1,1v12c0,0.495,0.362,0.915,0.852,0.989l15,2.25c0.05,0.007,0.099,0.011,0.148,0.011
	c0.238,0,0.47-0.085,0.652-0.242C20.873,41.817,21,41.541,21,41.25V27C21,26.447,20.552,26,20,26z"
                />
                <path
                  d="M45,26H24c-0.552,0-1,0.447-1,1v14.85c0,0.495,0.362,0.915,0.852,0.989l21,3.15C44.901,45.996,44.951,46,45,46
	c0.238,0,0.47-0.085,0.652-0.242C45.873,45.567,46,45.291,46,45V27C46,26.447,45.552,26,45,26z"
                />
              </svg>
            </Tab>
            <Tab>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                viewBox="0 0 266 312"
              >
                <path d="M128.6640625 79.2793c0 1-1 1-1 1h-1c-1 0-1-1-2-2 0 0-1-1-1-2s0-1 1-1l2 1c1 1 2 2 2 3m-18-10c0-5-2-8-5-8 0 0 0 1-1 1v2h3c0 2 1 3 1 5h2m35-5c2 0 3 2 4 5h2c-1-1-1-2-1-3s0-2-1-3-2-2-3-2c0 0-1 1-2 1 0 1 1 1 1 2m-30 16c-1 0-1 0-1-1s0-2 1-3c2 0 3-1 3-1 1 0 1 1 1 1 0 1-1 2-3 4h-1m-11-1c-4-2-5-5-5-10 0-3 0-5 2-7 1-2 3-3 5-3s3 1 5 3c1 3 2 6 2 9v2h1v-1c1 0 1-2 1-6 0-3 0-6-2-9s-4-5-8-5c-3 0-6 2-7 5-2 4-2.4 7-2.4 12 0 4 1.4 8 5.4 12 1-1 2-1 3-2m125 141c1 0 1-.4 1-1.3 0-2.2-1-4.8-4-7.7-3-3-8-4.9-14-5.7-1-.1-2-.1-2-.1-1-.2-1-.2-2-.2-1-.1-3-.3-4-.5 3-9.3 4-17.5 4-24.7 0-10-2-17-6-23s-8-9-13-10c-1 1-1 1-1 2 5 2 10 6 13 12 3 7 4 13 4 20 0 5.6-1 13.9-5 24.5-4 1.6-8 5.3-11 11.1 0 .9 0 1.4 1 1.4 0 0 1-.9 2-2.6 2-1.7 3-3.4 5-5.1 3-1.7 5-2.6 8-2.6 5 0 10 .7 13 2.1 4 1.3 6 2.7 7 4.3 1 1.5 2 2.9 3 4.2 0 1.3 1 1.9 1 1.9m-92-145c-1-1-1-3-1-5 0-4 0-6 2-9 2-2 4-3 6-3 3 0 5 2 7 4 1 3 2 5 2 8 0 5-2 8-6 9 0 0 1 1 2 1 2 0 3 1 5 2 1-6 2-10 2-15 0-6-1-10-3-13-3-3-6-4-10-4-3 0-6 1-9 3-2 3-3 5-3 8 0 5 1 9 3 13 1 0 2 1 3 1m12 16c-13 9-23 13-31 13-7 0-14-3-20-8 1 2 2 4 3 5l6 6c4 4 9 6 14 6 7 0 15-4 25-11l9-6c2-2 4-4 4-7 0-1 0-2-1-2-1-2-6-5-16-8-9-4-16-6-20-6-3 0-8 2-15 6-6 4-10 8-10 12 0 0 1 1 2 3 6 5 12 8 18 8 8 0 18-4 31-14v2c1 0 1 1 1 1m23 202c4 7.52 11 11.3 19 11.3 2 0 4-.3 6-.9 2-.4 4-1.1 5-1.9 1-.7 2-1.4 3-2.2 2-.7 2-1.2 3-1.7l17-14.7c4-3.19 8-5.98 13-8.4 4-2.4 8-4 10-4.9 3-.8 5-2 7-3.6 1-1.5 2-3.4 2-5.8 0-2.9-2-5.1-4-6.7s-4-2.7-6-3.4-4-2.3-7-5c-2-2.6-4-6.2-5-10.9l-1-5.8c-1-2.7-1-4.7-2-5.8 0-.3 0-.4-1-.4s-3 .9-4 2.6c-2 1.7-4 3.6-6 5.6-1 2-4 3.8-6 5.5-3 1.7-6 2.6-8 2.6-8 0-12-2.2-15-6.5-2-3.2-3-6.9-4-11.1-2-1.7-3-2.6-5-2.6-5 0-7 5.2-7 15.7v31.1c0 .9-1 2.9-1 6-1 3.1-1 6.62-1 10.6l-2 11.1v.17m-145-5.29c9.3 1.36 20 4.27 32.1 8.71 12.1 4.4 19.5 6.7 22.2 6.7 7 0 12.8-3.1 17.6-9.09 1-1.94 1-4.22 1-6.84 0-9.45-5.7-21.4-17.1-35.9l-6.8-9.1c-1.4-1.9-3.1-4.8-5.3-8.7-2.1-3.9-4-6.9-5.5-9-1.3-2.3-3.4-4.6-6.1-6.9-2.6-2.3-5.6-3.8-8.9-4.6-4.2.8-7.1 2.2-8.5 4.1s-2.2 4-2.4 6.2c-.3 2.1-.9 3.5-1.9 4.2-1 .6-2.7 1.1-5 1.6-.5 0-1.4 0-2.7.1h-2.7c-5.3 0-8.9.6-10.8 1.6-2.5 2.9-3.8 6.2-3.8 9.7 0 1.6.4 4.3 1.2 8.1.8 3.7 1.2 6.7 1.2 8.8 0 4.1-1.2 8.2-3.7 12.3-2.5 4.3-3.8 7.5-3.8 9.78 1 3.88 7.6 6.61 19.7 8.21m33.3-90.9c0-6.9 1.8-14.5 5.5-23.5 3.6-9 7.2-15 10.7-19-.2-1-.7-1-1.5-1l-1-1c-2.9 3-6.4 10-10.6 20-4.2 9-6.4 17.3-6.4 23.4 0 4.5 1.1 8.4 3.1 11.8 2.2 3.3 7.5 8.1 15.9 14.2l10.6 6.9c11.3 9.8 17.3 16.6 17.3 20.6 0 2.1-1 4.2-4 6.5-2 2.4-4.7 3.6-7 3.6-.2 0-.3.2-.3.7 0 .1 1 2.1 3.1 6 4.2 5.7 13.2 8.5 25.2 8.5 22 0 39-9 52-27 0-5 0-8.1-1-9.4v-3.7c0-6.5 1-11.4 3-14.6s4-4.7 7-4.7c2 0 4 .7 6 2.2 1-7.7 1-14.4 1-20.4 0-9.1 0-16.6-2-23.6-1-6-3-11-5-15l-6-9c-2-3-3-6-5-9-1-4-2-7-2-12-3-5-5-10-8-15-2-5-4-10-6-14l-9 7c-10 7-18 10-25 10-6 0-11-1-14-5l-6-5c0 3-1 7-3 11l-6.3 12c-2.8 7-4.3 11-4.6 14-.4 2-.7 4-.9 4l-7.5 15c-8.1 15-12.2 28.9-12.2 40.4 0 2.3.2 4.7.6 7.1-4.5-3.1-6.7-7.4-6.7-13m71.6 94.6c-13 0-23 1.76-30 5.25v-.3c-5 6-10.6 9.1-18.4 9.1-4.9 0-12.6-1.9-23-5.7-10.5-3.6-19.8-6.36-27.9-8.18-.8-.23-2.6-.57-5.5-1.03-2.8-.45-5.4-.91-7.7-1.37-2.1-.45-4.5-1.13-7.1-2.05-2.5-.79-4.5-1.82-6-3.07-1.38-1.26-2.06-2.68-2.06-4.27 0-1.6.34-3.31 1.02-5.13.64-1.1 1.34-2.2 2.04-3.2.7-1.1 1.3-2.1 1.7-3.1.6-.9 1-1.8 1.4-2.8.4-.9.8-1.8 1-2.9.2-1 .4-2 .4-3s-.4-4-1.2-9.3c-.8-5.2-1.2-8.5-1.2-9.9 0-4.4 1-7.9 3.2-10.4s4.3-3.8 6.5-3.8h11.5c.9 0 2.3-.5 4.4-1.7.7-1.6 1.3-2.9 1.7-4.1.5-1.2.7-2.1.9-2.5.2-.6.4-1.2.6-1.7.4-.7.9-1.5 1.6-2.3-.8-1-1.2-2.3-1.2-3.9 0-1.1 0-2.1.2-2.7 0-3.6 1.7-8.7 5.3-15.4l3.5-6.3c2.9-5.4 5.1-9.4 6.7-13.4 1.7-4 3.5-10 5.5-18 1.6-7 5.4-14 11.4-21l7.5-9c5.2-6 8.6-11 10.5-15s2.9-9 2.9-13c0-2-.5-8-1.6-18-1-10-1.5-20-1.5-29 0-7 .6-12 1.9-17s3.6-10 7-14c3-4 7-8 13-10s13-3 21-3c3 0 6 0 9 1 3 0 7 1 12 3 4 2 8 4 11 7 4 3 7 8 10 13 2 6 4 12 5 20 1 5 1 10 2 17 0 6 1 10 1 13 1 3 1 7 2 12 1 4 2 8 4 11 2 4 4 8 7 12 3 5 7 10 11 16 9 10 16 21 20 32 5 10 8 23 8 36.9 0 6.9-1 13.6-3 20.1 2 0 3 .8 4 2.2s2 4.4 3 9.1l1 7.4c1 2.2 2 4.3 5 6.1 2 1.8 4 3.3 7 4.5 2 1 5 2.4 7 4.2 2 2 3 4.1 3 6.3 0 3.4-1 5.9-3 7.7-2 2-4 3.4-7 4.3-2 1-6 3-12 5.82-5 2.96-10 6.55-15 10.8l-10 8.51c-4 3.9-8 6.7-11 8.4-3 1.8-7 2.7-11 2.7l-7-.8c-8-2.1-13-6.1-16-12.2-16-1.94-29-2.9-37-2.9" />
              </svg>
            </Tab>
            <Tab>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 50 50"
                width="250px"
                height="250px"
              >
                <path d="M44.529,34.75c-1.081,2.393-1.598,3.464-2.986,5.579c-1.94,2.954-4.678,6.64-8.064,6.665c-3.012,0.025-3.789-1.965-7.876-1.932c-4.087,0.02-4.939,1.969-7.954,1.938c-3.386-0.031-5.978-3.352-7.92-6.3C4.3,32.429,3.727,22.736,7.082,17.579c2.374-3.657,6.13-5.805,9.657-5.805c3.592,0,5.85,1.974,8.82,1.974c2.882,0,4.637-1.979,8.791-1.979c3.142,0,6.464,1.712,8.838,4.666C35.422,20.69,36.684,31.782,44.529,34.75z M31.197,8.468c1.511-1.94,2.657-4.677,2.242-7.468c-2.466,0.168-5.349,1.743-7.034,3.782c-1.526,1.857-2.791,4.615-2.298,7.283C26.797,12.152,29.581,10.548,31.197,8.468z" />
              </svg>
            </Tab>
            <Tab>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 50 50"
                width="250px"
                height="250px"
              >
                <rect x="0" fill="none" width="50" height="50" />
                <path d="M43.235,13.981c-0.124-0.038-0.253-0.05-0.384-0.037c-0.075,0.008-7.6,0.753-10.269,1.062c-0.103,0.012-0.201,0.018-0.297,0.018c-0.254,0-0.705-0.045-0.873-0.35c-0.182-0.327-0.128-1.072,0.566-2.179l0.117-0.186c1.066-1.697,1.602-2.55,1.602-4.311c0-3.859-3.208-7-7.15-7s-7.15,3.141-7.15,7c0,1.769,0.631,3.006,1.721,4.546c0.771,1.091,0.876,1.805,0.73,2.085c-0.139,0.269-0.69,0.417-1.384,0.371c-2.473-0.167-10.128-1.047-10.157-1.05c-0.171-0.027-0.333-0.04-0.487-0.04c-0.876,0-2.388,0.424-2.714,3.251c-0.086,0.414-0.488,2.644-1.072,10.397c-0.062,0.317-0.023,0.607,0.022,0.85c0.213,1.096,0.936,1.75,1.932,1.75c1.033,0,2.219-0.693,3.797-1.812C13.101,27.415,14.188,27,15.309,27c2.84,0,5.15,2.243,5.15,5s-2.311,5-5.15,5c-1.325,0-2.231-0.361-3.592-1.431c-1.579-1.241-2.757-1.819-3.706-1.819c-0.841,0-1.509,0.454-1.833,1.245c-0.189,0.46-0.213,1.16-0.146,1.548c0.521,5.441,0.773,6.43,0.995,7.301l0.094,0.38C7.508,45.91,8.695,47,10.146,47h32.035C44.501,47,46,45.528,46,43.25V17.388C46,15.674,45.07,14.527,43.235,13.981z" />
              </svg>
            </Tab>
          </TabList>
          <TabPanels className="download-tab-content">
            <TabPanel>
              <p>
                Setting up Plexcord is really easy. Just follow these steps:
              </p>
              <p style={{ margin: "1em 0" }}>
                Download and run
                <span
                  style={{
                    color: "var(--primary-color)",
                    textShadow: "0 0 6px var(--primary-color)",
                    margin: "0 5px",
                    padding: "0 5px",
                    borderRadius: "5px",
                  }}
                >
                  PlexcordInstaller.exe
                </span>
                . It will list all Discord versions installed on your computer.
                Choose the one you want and click Install.
              </p>
              <div className="download-buttons windows">
                <div
                  className="button c-pointer"
                  onClick={() =>
                    window.open(
                      "https://github.com/Plexcord/Installer/releases/latest/download/PlexcordInstaller.exe",
                      "_blank"
                    )
                  }
                >
                  PlexcordInstaller.exe
                </div>
                <div
                  className="button selected c-pointer"
                  onClick={() =>
                    window.open(
                      "https://github.com/Plexcord/Installer/releases/latest/download/PlexcordInstallerCli.exe",
                      "_blank"
                    )
                  }
                >
                  PlexcordInstallerCli.exe
                </div>
              </div>
              <p style={{ margin: "1em 0" }}>
                If the installer doesn’t open, don’t worry! Instead, download
                <span
                  style={{
                    color: "var(--primary-color)",
                    textShadow: "0 0 6px var(--primary-color)",
                    margin: "0 5px",
                    padding: "0 5px",
                    borderRadius: "5px",
                  }}
                >
                  PlexcordInstallerCli.exe
                </span>
                and run it. A terminal window will open. Just follow the
                instructions on the screen to complete the setup.
              </p>
              <div className="download-info">
                <p>Important! Do not run the installer as an Administrator.</p>
                <p style={{ margin: "1em 0" }}>
                  If you see a warning saying &quot;This app can&apos;t be
                  opened&quot;, click &quot;Run Anyway&quot;. If that option
                  isn&apos;t visible, click &quot;More info&quot; first.
                </p>
                <p>
                  This warning is completely harmless and only appears because
                  the app isn’t signed. Signing it would cost around €300 per
                  year, so we prefer to use that money to improve Plexcord
                  instead.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <p>
                Open your terminal and run the following command. Then follow
                the instructions in your terminal. If you&apos;re using fish,
                switch to bash first (by running
                <span
                  style={{
                    color: "var(--primary-color)",
                    textShadow: "0 0 6px var(--primary-color)",
                    margin: "0 5px",
                    padding: "0 5px",
                    borderRadius: "5px",
                  }}
                >
                  bash
                </span>
                ).
              </p>
              <div
                style={{
                  background: "var(--primary-color-bg-transparent)",
                  border: "1px solid var(--primary-color-bg-half-transparent)",
                  borderRadius: "5px",
                  padding: "10px",
                  margin: "1em 0",
                }}
              >
                <pre style={{ paddingBottom: "20px" }}>
                  <div
                    className="c-pointer"
                    onClick={copyToClipboard}
                    style={{
                      width: "fit-content",
                      right: "0",
                      textAlign: "right",
                      position: "relative",
                      margin: "0 0 0 auto",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {copied ? (
                      <svg
                        baseProfile="tiny"
                        height="24px"
                        id="Layer_1"
                        version="1.2"
                        viewBox="0 0 24 24"
                        width="24px"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <path d="M16.972,6.251c-0.967-0.538-2.185-0.188-2.72,0.777l-3.713,6.682l-2.125-2.125c-0.781-0.781-2.047-0.781-2.828,0  c-0.781,0.781-0.781,2.047,0,2.828l4,4C9.964,18.792,10.474,19,11,19c0.092,0,0.185-0.006,0.277-0.02  c0.621-0.087,1.166-0.46,1.471-1.009l5-9C18.285,8.005,17.937,6.788,16.972,6.251z" />
                      </svg>
                    ) : (
                      <svg
                        version="1.1"
                        viewBox="0 0 24 24"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <g id="grid_system" />
                        <g id="_icons">
                          <path d="M15.8,3.1C15.4,2.4,14.8,2,14,2h-4C9.2,2,8.6,2.4,8.2,3.1C6.4,3.4,5,5.1,5,7v11c0,2.2,1.8,4,4,4h6c2.2,0,4-1.8,4-4V7   C19,5.1,17.6,3.4,15.8,3.1z M14,4L14,4v1h-4V4L14,4z M17,18c0,1.1-0.9,2-2,2H9c-1.1,0-2-0.9-2-2V7c0-0.7,0.4-1.4,1-1.7   c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0.1,0.2c0,0,0,0.1,0.1,0.1C8.2,5.9,8.3,6,8.3,6c0,0,0.1,0.1,0.1,0.1   c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.1c0,0,0.1,0.1,0.1,0.1c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0,0.1,0.1   c0.1,0,0.2,0.1,0.2,0.1c0,0,0.1,0,0.1,0C9.7,7,9.9,7,10,7h4c0.1,0,0.3,0,0.4,0c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.2-0.1   c0,0,0.1,0,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1c0,0,0.1-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2   c0,0,0.1-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1   c0.6,0.3,1,1,1,1.7V18z" />
                        </g>
                      </svg>
                    )}
                    Copy
                  </div>
                  <code
                    style={{
                      backgroundColor: "transparent",
                      textWrap: "wrap",
                      overflowWrap: "break-word",
                      fontFamily: "monospace",
                    }}
                  >
                    sh -c &quot;$(curl -sS
                    https://raw.githubusercontent.com/Plexcord/Installer/main/install.sh)&quot;
                  </code>
                </pre>
              </div>
              <div className="download-info">
                <p>
                  Discord installed via snap is not supported. Instead, use one
                  of:
                </p>
                <p
                  className="info-link-hover c-pointer"
                  style={{ textDecoration: "underline" }}
                  onClick={() =>
                    window.open(
                      "https://flathub.org/apps/details/com.discordapp.Discord",
                      "_blank"
                    )
                  }
                >
                  Discord Flatpak
                </p>
                <p
                  className="info-link-hover c-pointer"
                  style={{ textDecoration: "underline" }}
                  onClick={() =>
                    window.open("https://discord.com/download", "_blank")
                  }
                >
                  Discord&apos;s official .deb package
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <p>
                Download the zip, unzip it and run
                <span
                  style={{
                    color: "var(--primary-color)",
                    textShadow: "0 0 6px var(--primary-color)",
                    margin: "0 5px",
                    padding: "0 5px",
                    borderRadius: "5px",
                  }}
                >
                  PlexcordInstaller.app
                </span>
                ! It should list all Discord installs on your System. Pick the
                one you would like to patch and press Install.
              </p>
              <div className="download-buttons windows">
                <div
                  className="button c-pointer"
                  onClick={() =>
                    window.open(
                      "https://github.com/Plexcord/Installer/releases/latest/download/PlexcordInstaller.MacOS.zip",
                      "_blank"
                    )
                  }
                >
                  PlexcordInstaller.MacOs.zip
                </div>
              </div>
              <div className="download-info">
                <p style={{ marginBottom: "1em" }}>
                  Plexcord Installer Not Opening? No Worries!
                </p>
                <p>
                  If you see a &quot;PlexcordInstaller can&apos;t be
                  opened&quot; warning, here’s how to fix it:
                </p>
                <p>
                  If you&apos;re using macOS Sonoma or an earlier version:
                  Right-click the file and select &quot;Open&quot;.
                </p>
                <p>
                  If you&apos;re on macOS Sequoia or right-clicking isn’t
                  working: You can allow the app to run from your System
                  Settings.
                </p>
                <p>
                  For step-by-step instructions,
                  <span
                    className="info-link-hover c-pointer"
                    style={{ textDecoration: "underline", margin: "0 0 0 5px" }}
                    onClick={() =>
                      window.open(
                        "https://support.apple.com/tr-tr/102445#openanyway",
                        "_blank"
                      )
                    }
                  >
                    click
                  </span>
                  .
                </p>
                <p style={{ marginTop: "1em" }}>
                  Don&apos;t worry, this warning is totally harmless! It just
                  appears because the app isn&apos;t signed. We&apos;d love to
                  sign it but it costs €99 per year. So we’re putting that money
                  into making Plexcord even better!
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <p style={{ textAlign: "center" }}>
                You can download Plexcord from the Chrome Store or use the
                Userscript.
              </p>
              <div className="download-buttons" style={{ margin: "1em 0" }}>
                <div
                  className="hover-download-img-btn c-pointer"
                  onClick={() =>
                    window.open(
                      "https://chromewebstore.google.com/detail/plexcord-web/pdbajenofcbjlenlccdlfpdckjgooagi",
                      "_blank"
                    )
                  }
                >
                  <img
                    style={{
                      borderRadius: "10px",
                      margin: 0,
                      padding: 0,
                      userSelect: "none",
                    }}
                    src="/img/chrome-button.png"
                    alt="Chrome Store"
                  />
                </div>
                <div
                  className="hover-download-img-btn c-pointer"
                  onClick={() =>
                    window.open(
                      "https://raw.githubusercontent.com/Plexcord/Builds/main/Plexcord.user.js",
                      "_blank"
                    )
                  }
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    maxHeight: "58px",
                    color: "black",
                    userSelect: "none",
                    width: "fit-content",
                    padding: "0 10px 0 0",
                  }}
                >
                  <img
                    src="/img/monkey.png"
                    alt="userscript"
                    style={{ margin: "0 5px", width: "48px", height: "48px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "24px",
                      fontFamily: "sans-serif",
                      fontWeight: "normal",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "15px",
                      }}
                    >
                      Get the
                    </span>
                    <span style={{ fontWeight: "bold" }}>Userscript</span>
                  </div>
                </div>
              </div>
              <p className="download-info">
                Please note that due to Discord&apos;s{" "}
                <span
                  className="info-link-hover c-pointer"
                  style={{ textDecoration: "underline" }}
                  onClick={() =>
                    window.open(
                      "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
                      "_blank"
                    )
                  }
                >
                  content security policy
                </span>
                , the CSS Editor, custom themes and plugins making use of
                external scripts will not work with the Userscript.
              </p>
              <div
                className="download-info"
                style={{
                  backgroundColor: "var(--warning-color-transparent)",
                  border: "1px solid var(--warning-color)",
                }}
              >
                <p>
                  If the extension is ever broken, please use our
                  <span
                    onClick={() =>
                      window.open("https://plexcord.club/discord", "_blank")
                    }
                    style={{
                      color: "var(--warning-color)",
                      textDecoration: "underline",
                      margin: "0 5px",
                    }}
                    className="info-link-hover c-pointer"
                  >
                    support channel
                  </span>
                  instead of leaving a negative Review on the Chrome Web Store.
                  We are likely already working on fixing it, or even just
                  waiting for Google to approve the update. Receiving negative
                  reviews for a temporary breakage that we have no control over
                  is very frustrating.
                </p>
                <p style={{ marginTop: "1em" }}>
                  Additionally, don&apos;t use the support hub on the Chrome Web
                  Store. We will not answer there. Instead, use our
                  <span
                    className="info-link-hover c-pointer"
                    onClick={() =>
                      window.open("https://plexcord.club/discord", "_blank")
                    }
                    style={{
                      color: "var(--warning-color)",
                      textDecoration: "underline",
                      margin: "0 0 0 5px",
                    }}
                  >
                    Discord server
                  </span>
                  .
                </p>
              </div>
              <div className="download-info">
                <p>
                  Setting up Plexcord is really easy. Just follow these steps:
                </p>
                <div className="browser-icons">
                  <img src="/icons/browser/brave.svg" alt="" />
                  <img src="/icons/browser/chrome.svg" alt="" />
                  <img src="/icons/browser/chromium.svg" alt="" />
                  <img src="/icons/browser/edge.svg" alt="" />
                  <img src="/icons/browser/opera-gx.svg" alt="" />
                  <img src="/icons/browser/opera.svg" alt="" />
                  <img src="/icons/browser/vivaldi.svg" alt="" />
                </div>
                <p>
                  Install the extension from the
                  <span
                    className="info-link-hover c-pointer"
                    style={{ textDecoration: "underline", margin: "0 5px" }}
                    onClick={() =>
                      window.open(
                        "https://chromewebstore.google.com/detail/plexcord-web/pdbajenofcbjlenlccdlfpdckjgooagi"
                      )
                    }
                  >
                    Chrome Webstore
                  </span>
                </p>

                <p style={{ margin: "1em 0" }}>
                  Alternatively, install a Userscript manager like
                  <span
                    className="info-link-hover c-pointer"
                    onClick={() =>
                      window.open("https://violentmonkey.github.io/", "_blank")
                    }
                    style={{ textDecoration: "underline", margin: "0 5px" }}
                  >
                    Violentmonkey
                  </span>
                  or
                  <span
                    className="info-link-hover c-pointer"
                    onClick={() =>
                      window.open("https://www.tampermonkey.net/", "_blank")
                    }
                    style={{ textDecoration: "underline", margin: "0 0 0 5px" }}
                  >
                    Tampermonkey
                  </span>
                  . Then, open the
                  <span
                    className="info-link-hover c-pointer"
                    onClick={() =>
                      window.open(
                        "https://raw.githubusercontent.com/Plexcord/Builds/main/Plexcord.user.js",
                        "_blank"
                      )
                    }
                    style={{ textDecoration: "underline", margin: "0 5px" }}
                  >
                    Plexcord.user.js
                  </span>
                  link and your Userscript manager should automatically prompt
                  you to install it.
                </p>

                <div className="browser-icons">
                  <img src="/icons/browser/firefox.svg" alt="" />
                </div>
                <p>
                  1- Install the Tampermonkey extension from the
                  <span
                    className="info-link-hover c-pointer"
                    onClick={() =>
                      window.open(
                        "https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/",
                        "_blank"
                      )
                    }
                    style={{ textDecoration: "underline", margin: "0 0 0 5px" }}
                  >
                    Firefox Add-ons store
                  </span>
                  . (Other Userscript managers like Violentmonkey are sadly not
                  supported due to a Firefox bug that only Tampermonkey works
                  around)
                </p>
                <p>
                  2- Open the
                  <span
                    className="info-link-hover c-pointer"
                    onClick={() =>
                      window.open(
                        "https://raw.githubusercontent.com/Plexcord/Builds/main/Plexcord.user.js",
                        "_blank"
                      )
                    }
                    style={{ textDecoration: "underline", margin: "0 5px" }}
                  >
                    Plexcord.user.js
                  </span>
                  link and Tampermonkey should prompt you to install it
                </p>

                <p style={{ margin: "1em 0" }}>
                  Unfortunately, publishing to the Mozilla extension store is a
                  nightmare and forces us to limit Plexcord&apos;s features due
                  to their strict guidelines. Firefox does not let you install
                  third party extensions unless they are signed (which also
                  requires store approval). As such, it is no longer possible
                  for us to offer a Firefox extension.
                </p>

                <div className="browser-icons">
                  <img src="/icons/browser/safari.svg" alt="" />
                </div>

                <p style={{ margin: "0" }}>
                  We do not currently support Safari, sorry. Please use a
                  different Browser if you are interested in using Plexcord Web.
                </p>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
};

export default Download;
