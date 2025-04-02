import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { marked } from "marked";
const Plugins = () => {
  const [plugins, setPlugins] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPlugin = location.pathname.startsWith("/plugins/")
    ? location.pathname.split("/").pop()
    : null;

  const handlePluginClick = (pluginName) => {
    navigate(`/plugins/${pluginName}`);
  };

  useEffect(() => {
    const parseDevs = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Plexcord/Builds/refs/heads/main/plugins.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPlugins(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    parseDevs();
  }, []);

  return (
    <>
      <title>Plugins | Plexcord</title>
      <meta name="keywords" content="plexcord plugins, plexcord plugin, discord plugin" />
      <div className="content-container" style={{ width: "100%", maxWidth: "1200px",flex: "1", margin: "0 auto" }}>
        {!currentPlugin && (
          <div>
            <h1>Plugins</h1>
            <p>Here are some plugins you can use with Plexcord:</p>
            <ul className="plugin-list-ul">
              {plugins
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((plugin) => (
                  <li
                    className="plugin-list-li c-pointer"
                    key={plugin.name}
                    onClick={() => handlePluginClick(plugin.name)}
                  >
                    <h4 className="c-pointer">{plugin.name}</h4>
                    <p className="c-pointer by">
                      by{" "}
                      {plugin.authors.length > 1
                        ? plugin.authors.map((author) => author.name).join(", ")
                        : plugin.authors[0].name}
                    </p>
                    <p className="c-pointer">{plugin.description}</p>
                  </li>
                ))}
            </ul>
          </div>
        )}
        {currentPlugin && (
          <div>
            {plugins
              .filter((plugin) => plugin.name === currentPlugin)
              .map((plugin) => (
                <div key={plugin.key}>
                  <h1>{plugin.name}</h1>
                  <p>
                    <strong>by</strong>{" "}
                    {plugin.authors.length > 1
                      ? plugin.authors.map((author) => author.name).join(", ")
                      : plugin.authors[0].name}
                  </p>
                  <div className="plugin-readme">
                    {plugin.readme ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: marked(plugin.readme || ""),
                        }}
                      />
                    ) : (
                      plugin.description
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Plugins;
