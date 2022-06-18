import React from "react";

import "./AdminAddQuestion.css";

export const AdminAddMultipleChoice = () => {
  return (
    <section className="AdminAddQuestion">
        <h1 className="text-align-center h1-style-ignore"> Gesloten vraag toevoegen </h1>
        <section className="sectionQuestionInputFields">
            <label for="question" className="bigger-font-size"> De vraag zelf: </label>
            <input name="question"></input>
            <section className="sectionAnswers">
                <label className="bigger-font-size margin-top"> De antwoorden </label>
                <p> Minimaal 2, maximaal 4 </p>
                <label for="answer1"> Antwoord 1: </label>
                <input name="answer1"></input>     
                <label for="answer2"> Antwoord 2: </label>
                <input name="answer2"></input>
                <section className="sectionButtonsAdmin">
                    <button className="secondary-button-style-2"> Voeg antwoord toe </button> 
                    <hr class="line"></hr>
                    <button className="primary-button-style-2"> Vraag toevoegen </button>           
                </section>
            </section>
        </section>
    </section>
  );
};