"use client";

import { useState } from "react";
import { useStudy } from "@/components/study-provider";
import { presentationRegisters, type PresentationRegister } from "@/lib/curriculum";
import { Ornament } from "@/components/ornament";

export function Onboarding() {
  const { state, update } = useStudy();
  const [name, setName] = useState(state.learnerName);
  const [register, setRegister] = useState<PresentationRegister>(state.presentationRegister);
  const validName = name.trim().length >= 1;

  function begin() {
    if (!validName) return;
    update({
      onboarded: true,
      learnerName: name.trim().slice(0, 40),
      presentationRegister: register,
      registersEncountered: state.registersEncountered.includes(register) ? state.registersEncountered : [...state.registersEncountered, register],
    });
  }

  return (
    <main className="onboarding-page shell">
      <section className="onboarding-intro">
        <p className="kicker">Welcome to The Studium</p>
        <h1>Begin where you can attend well.</h1>
        <p>The lesson’s truth does not change. You may choose the form of presentation that best helps you encounter it now—and change it whenever you wish.</p>
        <Ornament />
      </section>
      <section className="onboarding-card paper-card" aria-labelledby="begin-heading">
        <div className="onboarding-step">
          <p className="folio">I. Your study</p>
          <h2 id="begin-heading">What should we call you?</h2>
          <label className="simple-field"><span>Preferred name</span><input autoComplete="given-name" maxLength={40} value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" /></label>
          <p className="field-note">This name stays in this browser. It is not sent to us.</p>
        </div>
        <div className="onboarding-step">
          <p className="folio">II. Your starting presentation</p>
          <h2>How would you like to begin?</h2>
          <div className="register-cards" role="radiogroup" aria-label="Starting presentation">
            {(Object.keys(presentationRegisters) as PresentationRegister[]).map((value) => (
              <label className={register === value ? "selected" : ""} key={value}>
                <input type="radio" name="register" value={value} checked={register === value} onChange={() => setRegister(value)} />
                <span><strong>{presentationRegisters[value].label}</strong><small>{presentationRegisters[value].description}</small></span>
              </label>
            ))}
          </div>
          <p className="field-note">These are forms of mediation, not ranks or age levels.</p>
        </div>
        <div className="onboarding-privacy"><span aria-hidden="true">◌</span><p><strong>A browser-local prototype.</strong> Your preferences and lesson responses remain on this device. Do not enter sensitive personal information.</p></div>
        <button className="button primary" disabled={!validName} onClick={begin}>Enter the Study <span aria-hidden="true">→</span></button>
      </section>
    </main>
  );
}
