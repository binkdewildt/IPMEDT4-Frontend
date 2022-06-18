import React from "react";

import "./AdminAddQuestion.css";

export const AdminAddOpenQuestion = () => {
  return (
    <section className="AdminAddQuestion">
        <h1 className="text-align-center h1-style-ignore"> Open vraag toevoegen </h1>
        <section className="sectionQuestionInputFields">
            <label for="question" className="bigger-font-size"> De vraag zelf: </label>
            <input name="question"></input>
            <section className="sectionAnswers">
                <label for="answer" className="bigger-font-size"> Het antwoord: </label>
                <input name="answer"></input>     
                <section className="sectionButtonsAdmin">
                    <button className="primary-button-style-2"> Vraag toevoegen </button>           
                </section>
            </section>
        </section>
    </section>
  );
};