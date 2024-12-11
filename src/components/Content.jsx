import React, { useState } from "react";
import Topics from "./Topics";
import Questions from "./Questions";
import Notes from "./Notes";
export default function Content() {

  return (
    <div style={{maxWidth:'1920px', margin: '0 auto'}}>
      <div className="Content">
        <Topics/>
        <Questions/>
      </div>
      <Notes/>
    </div>
  );
}
