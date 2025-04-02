import React, { useEffect, useState } from "react";

const repos = [
  { owner: "MutanPlex", repo: "Plexcord" },
  { owner: "Plexcord", repo: "Installer" },
  { owner: "Plexcord", repo: "Backend" },
  { owner: "Plexcord", repo: "plexcord.club" },
];

const languageColors = {
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  CSS: "#563d7c",
  HTML: "#e34c26",
  "C++": "#f34b7d",
  "C#": "#178600",
  PHP: "#4F5D95",
  Ruby: "#701516",
  TypeScript: "#2b7489",
  Go: "#00ADD8",
};

const customDescriptions = {
  Plexcord: "Plexcord main repository.",
  Installer: "Plexcord's installer main repository.",
  Backend: "Plexcord's Backend providing you with features like settings sync.",
  "plexcord.club":
    "Plexcord's official website repository. (the one you're currently on)",
};

const RepoCard = ({ data }) => {
  const customDescription = customDescriptions[data.name] || data.description;

  return (
    <>
    <title>Source | Plexcord</title>
    <meta name="keywords" content="plexcord source, plexcord github, discord source" />
    <div
      onClick={() => window.open(data.html_url, "_blank")}
      rel="noopener noreferrer"
      className="repo-card c-pointer"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        textDecoration: "none",
        color: "inherit",
        transition: ".3s"
      }}
    >
      <div
        className="c-pointer"
        style={{
          border: "1px solid var(--primary-color)",
          background: "var(--primary-color-bg-transparent)",
          padding: "1rem",
          borderRadius: "8px",
          transition: "box-shadow 0.3s",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div
          className="c-pointer"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <img
            className="c-pointer"
            src={data.owner.avatar_url}
            alt={data.owner.login}
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              marginRight: "0.5rem",
            }}
          />
          <span style={{ fontSize: "14px" }}>{data.owner.login}</span>
        </div>

        <p className="c-pointer" style={{ fontWeight: "600" }}>
          {data.name}
        </p>
        <p className="c-pointer" style={{ margin: "10px 0" }}>
          {customDescription}
        </p>
        <div
          className="c-pointer"
          style={{ display: "flex", marginTop: "auto", gap: "20px" }}
        >
          <p
            className="c-pointer"
            style={{ display: "flex", alignItems: "center" }}
          >
            {data.language ? (
              <span className="c-pointer" style={{ display: "flex", alignItems: "center" }}>
                <span className="c-pointer"
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: languageColors[data.language] || "#000",
                    marginRight: "0.25rem",
                  }}
                ></span>
                {data.language}
              </span>
            ) : (
              "Unknown"
            )}
          </p>

          <p className="c-pointer"
            style={{ marginTop: "auto", display: "flex", alignItems: "center" }}
          >
            <span className="c-pointer" style={{ display: "flex", alignItems: "center" }}>
              <span className="c-pointer"
                role="img"
                aria-label="star"
                style={{ marginRight: "0.25rem" }}
              >
                <svg className="c-pointer"
                  fill="var(--primary-color)"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="800px"
                  height="800px"
                  viewBox="0 0 36.09 36.09"
                  xmlSpace="preserve"
                  style={{ width: "12px", height: "12px" }}
                >
                  <g>
                    <path
                      d="M36.042,13.909c-0.123-0.377-0.456-0.646-0.85-0.688l-11.549-1.172L18.96,1.43c-0.16-0.36-0.519-0.596-0.915-0.596
                      s-0.755,0.234-0.915,0.598L12.446,12.05L0.899,13.221c-0.394,0.04-0.728,0.312-0.85,0.688c-0.123,0.377-0.011,0.791,0.285,1.055
                      l8.652,7.738L6.533,34.045c-0.083,0.387,0.069,0.787,0.39,1.02c0.175,0.127,0.381,0.191,0.588,0.191
                      c0.173,0,0.347-0.045,0.503-0.137l10.032-5.84l10.03,5.84c0.342,0.197,0.77,0.178,1.091-0.059c0.32-0.229,0.474-0.633,0.391-1.02
                      l-2.453-11.344l8.653-7.737C36.052,14.699,36.165,14.285,36.042,13.909z M25.336,21.598c-0.268,0.24-0.387,0.605-0.311,0.957
                      l2.097,9.695l-8.574-4.99c-0.311-0.182-0.695-0.182-1.006,0l-8.576,4.99l2.097-9.695c0.076-0.352-0.043-0.717-0.311-0.957
                      l-7.396-6.613l9.87-1.002c0.358-0.035,0.668-0.264,0.814-0.592l4.004-9.077l4.003,9.077c0.146,0.328,0.456,0.557,0.814,0.592
                      l9.87,1.002L25.336,21.598z"
                    />
                  </g>
                </svg>
              </span>
              {data.stargazers_count}
            </span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

const Source = () => {
  const [reposData, setReposData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const responses = await Promise.all(
          repos.map(({ owner, repo }) =>
            fetch(`https://api.github.com/repos/${owner}/${repo}`).then((res) =>
              res.json()
            )
          )
        );
        setReposData(responses);
      } catch (error) {
        console.error("Error fetching repository data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className="content-container"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        flex: "1",
      }}
    >
      <h1>Source</h1>
      <p>Plexcord&apos;s git repository</p>
      <div className="card-container">
        {reposData.map((repoData, index) => (
          <RepoCard key={index} data={repoData} />
        ))}
      </div>
    </div>
  );
};

export default Source;
