/**
 * Potree
 * WebGL Point Cloud Viewer
 * https://github.com/potree/potree/
 */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

// Potreeライブラリのインポート
const Potree = (window as any).Potree;
console.log(Potree);

export default class App extends React.PureComponent {
  private potreeContainerDiv = React.createRef<HTMLDivElement>();
  private potreeRenderAreaDiv = React.createRef<HTMLDivElement>();
  public render() {
    return (
      <div id="potree-root">
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: "0px",
            top: "0px",
          }}
          ref={this.potreeContainerDiv}
          className={"potree_container"}
        >
          <div ref={this.potreeRenderAreaDiv} id="potree_render_area"></div>
          <div id="potree_sidebar_container"></div>
        </div>
      </div>
    );
  }

  // Potreeビューアの初期化
  componentDidMount() {
    const viewerElem = this.potreeRenderAreaDiv.current;
    (window as any).viewer = new Potree.Viewer(viewerElem);
    (window as any).viewer.loadGUI(() => {
      (window as any).viewer.setLanguage("jp");
      (window as any).viewer.toggleSidebar();
    });
    const projectPath = "./potree.json5";
    (window as any).viewer.loadProject(projectPath).then(() => {
      console.log("project loaded");
    });
  }
}
