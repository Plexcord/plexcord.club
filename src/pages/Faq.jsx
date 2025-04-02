import { useNavigate } from "react-router-dom";
import { Accordion, Panel } from "rsuite";
import "rsuite/Accordion/styles/index.css";
import "rsuite/Panel/styles/index.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeBlock = () => {
  const codeString = `(() => {
  Plexcord.Settings.useQuickCss = false
  try {
    const copy = window.copy ?? Plexcord.Webpack.Common.Clipboard.copy
    copy(Plexcord.Settings.themeLinks.join("\\n"))
  } catch { }
  Plexcord.Settings.themeLinks = []
  Plexcord.Settings.enabledThemes = []
})()`;

  return (
    <SyntaxHighlighter
      language="javascript"
      style={oneDark}
      showLineNumbers
      wrapLongLines
      customStyle={{
        borderRadius: "5px",
        border: "1px solid var(--primary-color)",
        backgroundColor: "var(--primary-color-bg-transparent)",
        padding: "10px",
        fontSize: "14px",
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

const Faq = () => {
  const navigate = useNavigate();
  return (
    <>
    <title>Faq | Plexcord</title>
    <meta name="keywords" content="plexcord faq, plexcord sss" />
    <div className="content-container"
      style={{ width: "100%", maxWidth: "1200px", flex: "1", margin: "0 auto" }}
    >
      <h1>Faq</h1>
      <Accordion defaultActiveKey={0} bordered>
        <Panel header="How to I install Plexcord?" key={0}>
          <p>
            You can install Plexcord by following the instructions on the{" "}
            <span
              className="href c-pointer"
              style={{ textDecoration: "underline" }}
              onClick={() => {
                navigate("/download");
              }}
            >
              download page
            </span>
            .
          </p>
        </Panel>
        <Panel header="Plexcord is not working for me, what do I do?" key={1}>
          <p>
            Your Plexcord might be out of date, and that’s probably what’s
            causing the issue. No worries! Just check for updates using our
            built-in updater.
          </p>
          <p style={{ margin: "1em 0" }}>
            If you can’t access it because of crashes or other issues, you can
            simply use the &quot;Update Plexcord&quot; option in the Installer.
          </p>
          <p style={{ margin: "0  0 1em" }}>
            Already up to date? Try reinstalling with the installer anyway. It
            often does the trick!
          </p>
          <p>
            Still having trouble? Let us know in our{" "}
            <span
              className="href c-pointer"
              style={{ textDecoration: "underline" }}
              onClick={() => {
                window.open("https://plexcord.club/discord", "_blank");
              }}
            >
              support server
            </span>
            , and we’ll be happy to help! 😊
          </p>
        </Panel>
        <Panel header="Can I use this on the web version of Discord?" key={2}>
          <p>
            Yes! We provide extensions for Chromium based browsers and a
            Userscript build.
          </p>
          <p style={{ margin: "1em 0 0" }}>
            See our{" "}
            <span
              className="href c-pointer"
              style={{ textDecoration: "underline" }}
              onClick={() => {
                navigate("/download");
              }}
            >
              download page
            </span>{" "}
            for more information.
          </p>
        </Panel>
        <Panel
          header="Can I use this on the mobile version of Discord?"
          key={3}
        >
          <p>
            Unfortunately, Plexcord is not supported on the mobile version of
            Discord for now, at least.
          </p>
          <p style={{ margin: "1em 0" }}>
            Instead, we recommend the following alternatives:
          </p>
          <p>
            <span
              className="href c-pointer"
              style={{ textDecoration: "underline" }}
              onClick={() => {
                window.open("https://github.com/pyoncord/pyoncord", "_blank");
              }}
            >
              Pyoncord
            </span>{" "}
            (
            <span
              className="href c-pointer"
              style={{ textDecoration: "underline" }}
              onClick={() => {
                window.open("https://discord.com/invite/XjYgWXHb9Q", "_blank");
              }}
            >
              discord server
            </span>{" "}
            ) ~ supports both android & ios. uses the latest discord mobile app
          </p>
          <p>
            <span
              className="href c-pointer"
              style={{ textDecoration: "underline" }}
              onClick={() => {
                window.open("https://aliucord.com", "_blank");
              }}
            >
              Aliuicord
            </span>{" "}
            (
            <span
              className="href c-pointer"
              style={{ textDecoration: "underline" }}
              onClick={() => {
                window.open("https://discord.com/invite/EsNDvBaHVU", "_blank");
              }}
            >
              discord server
            </span>{" "}
            ) ~ android only. uses the old (now ~2 years old) version of the
            discord android app
          </p>
        </Panel>
        <Panel
          header="How do I install BetterDiscord / Replugged / Other mod plugins?"
          key={4}
        >
          <p>You can’t.</p>

          <p style={{ margin: "1em 0" }}>
            Chances are, it’s already a Plexcord plugin! Or if it isn’t, you can
            open a{" "}
            <span
              className="href c-pointer"
              style={{ textDecoration: "underline" }}
              onClick={() => {
                window.open(
                  "https://github.com/Plexcord/plugin-requests/issues/new?template=request.yml",
                  "_blank"
                );
              }}
            >
              plugin request
            </span>
          </p>
        </Panel>
        <Panel
          header="Will I get banned for using Plexcord? Will plugin X get me banned?"
          key={5}
        >
          <p>Client modifications are against Discord’s Terms of Service.</p>
          <p style={{ margin: "1em 0" }}>
            However, Discord is pretty indifferent about them and there are no
            known cases of users getting banned for using client mods! So you
            should generally be fine as long as you don’t use any plugins that
            implement abusive behaviour. But no worries, all inbuilt plugins are
            safe to use!
          </p>
          <p style={{ margin: "0 0 1em" }}>
            Regardless, if your account is very important to you and it getting
            disabled would be a disaster for you, you should probably not use
            any client mods (not exclusive to Plexcord), just to be safe
          </p>
          <p>
            Additionally, make sure not to post screenshots with Plexcord in a
            server where you might get banned for it
          </p>
        </Panel>
        <Panel
          header="How do I migrate my Plexcord Settings from Canary to Stable (or vice versa)?"
          key={6}
        >
          <p>
            Settings are already shared across all Discord instances on the same
            PC so you can just switch and they will be kept!
          </p>
        </Panel>
        <Panel header="Why is my Discord laggy?" key={7}>
          <p>The most common cause of lag is poorly written CSS.</p>
          <p style={{ margin: "1em 0" }}>
            To see if this is the case for you, try temporarily disabling all
            themes and your QuickCSS.
          </p>
          <p>
            If that indeed fixes the lagging, you’ll have to figure out which
            theme / part of your QuickCSS is causing the lag. Just slowly remove
            parts of it until it doesn’t lag anymore.
          </p>
        </Panel>
        <Panel
          header="My themes broke and now I can’t open settings or disable them"
          key={8}
        >
          <p>
            Open the dev tools with <span>CTRL + Shift + i</span> (
            <span>Cmd + Option + i </span> on MacOS) and click on the
            &quot;console&quot; tab at the top. Then paste and run (with enter)
            the following code.
          </p>
          <p style={{ margin: "1em 0" }}>It will </p>
          <ul style={{ padding: "0", margin: "0 2em" }}>
            <li>
              <p>
                disable custom css (you can turn it back on in Plexcord
                Settings)
              </p>
            </li>
            <li>
              <p>copy your current theme links to your clipboard as a backup</p>
            </li>
            <li>
              <p>remove all themes</p>
            </li>
          </ul>
          <CodeBlock />
        </Panel>
        <Panel header="Why do I get logged out after opening DevTools?" key={9}>
          <p>
            Discord tries to protect you from getting scammed by
            &quot;hiding&quot; your token when you open DevTools, which means it
            deletes it from storage and only keeps it in memory in order to make
            it harder to obtain.
          </p>
          <p style={{ margin: "1em 0" }}>
            If you now close discord before closing DevTools again, your token
            will not be saved anywhere anymore and as a consequence you will be
            logged out
          </p>
          <p style={{ margin: "0 0 1em" }}>
            Solution: Close DevTools before closing discord or better yet enable
            the NoDevtoolsWarning plugin which removes this “feature”
          </p>
        </Panel>
        <Panel header="How do I uninstall Plexcord?" key={10}>
          <p>
            Plexcord is uninstalled the same way you install it. Just use the
            &quot;Uninstall&quot; button instead
          </p>
        </Panel>
        <Panel header="What are the official websites for Plexcord?" key={11}>
          <p>
            The only official website is{" "}
            <span style={{ textDecoration: "underline" }}>plexcord.club</span>,
            which can be confirmed on GitHub and the installer itself. We are
            not affiliated with any other website, and any that claim to be or
            use our brand are malicious impersonators.
          </p>
          <p style={{ margin: "1em 0 0" }}>
            If you have downloaded software offered by these sites, remove it as
            soon as possible, run a malware scan, reinstall Discord, and change
            your password. Also, if possible, dispatch an intercontinental
            ballistic missile to your hard drive for good measure.
          </p>
        </Panel>
        <Panel header="How do I report a bug or request a feature?" key={12}>
          <p>
            You can submit your{" "}
            <span
              className="c-pointer"
              style={{ textDecoration: "underline" }}
              onClick={() => {
                window.open(
                  "https://github.com/Plexcord/plugin-requests/issues/new?template=request.yml",
                  "_blank"
                );
              }}
            >
              plugin requests
            </span>{" "}
            via GitHub. To report a bug, please use the support channel on our{" "}
            <span
              className="c-pointer"
              style={{ textDecoration: "underline" }}
              onClick={() => {
                window.open("https://plexcord.club/discord", "_blank");
              }}
            >
              Discord server
            </span>
            .
          </p>
        </Panel>
        <Panel
          header="I see there are packages for Nix or another platform not on the website, do you support them?"
          key={13}
        >
          <p>
            No. These packages are maintained by people (usually) unrelated to
            Plexcord. We can’t provide support for unofficial repackages of
            Plexcord unless it’s an actual bug in the mod itself (except when
            such bugs occur due to the repackage).
          </p>
          <p style={{ margin: "1em 0 0" }}>
            Please forward your support enquiries to the people who maintain
            these packages instead of us.
          </p>
        </Panel>
        <Panel
          header="Does Plexcord support a Windows Distro (e.g., AtlasOS, Tiny11)?"
          key={14}
        >
          <p>
            No, custom distributions of Windows are not supported as they tend
            to remove critical system components or libraries that Plexcord (or
            its installer) depends on.
          </p>
          <p style={{ margin: "1em 0 0" }}>
            If it works for you, great! However, we can’t provide support for
            any issues that occur.
          </p>
        </Panel>
      </Accordion>
    </div>
    </>
  );
};

export default Faq;
