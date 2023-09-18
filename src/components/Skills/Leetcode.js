import React from "react";
import ReactMarkdown from 'react-markdown'

const Leetcode = () => {
  return (
    <div style={{paddingBottom: "10px", width: "60%", margin: "auto" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px"}}>
        <strong className="yellow">LeetCode</strong> Stat
      </h1>
      <ReactMarkdown>
      ![LeetCode Stats](https://leetcard.jacoblin.cool/Vatscodez?theme=dark&font=Syne%20Mono&ext=heatmap)
      </ReactMarkdown>
    </div>
  );
}

export default Leetcode;
