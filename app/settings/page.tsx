"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStudy } from "@/components/study-provider";
import { presentationRegisters, type PresentationRegister } from "@/lib/curriculum";

export default function SettingsPage() {
  const router = useRouter();
  const { state, update, setRegister, reset } = useStudy();
  const [name, setName] = useState(state.learnerName);
  const [saved, setSaved] = useState(false);
  const [confirmingReset, setConfirmingReset] = useState(false);

  function save() {
    const learnerName = name.trim().slice(0, 40);
    if (!learnerName) return;
    update({ learnerName });
    setSaved(true);
  }

  function resetStudy() {
    reset();
    router.push("/");
  }

  return (
    <main className="shell settings-page">
      <header className="settings-heading"><p className="kicker">Preferences & privacy</p><h1>Your place of study</h1><p>Adapt the manner of presentation while preserving the common object of study.</p></header>
      <div className="settings-grid">
        <section className="settings-section paper-card">
          <p className="folio">Learner</p><h2>Name used in this browser</h2>
          <label className="simple-field"><span>Preferred name</span><input maxLength={40} value={name} onChange={(event) => { setName(event.target.value); setSaved(false); }} /></label>
          <button className="button primary" onClick={save} disabled={!name.trim()}>Save name</button>
          {saved && <p className="saved-inline" role="status">Your preference has been kept.</p>}
        </section>
        <section className="settings-section paper-card">
          <p className="folio">Presentation</p><h2>Preferred starting register</h2>
          <div className="settings-registers">
            {(Object.keys(presentationRegisters) as PresentationRegister[]).map((register) => (
              <button key={register} aria-pressed={state.presentationRegister === register} onClick={() => setRegister(register)}>
                <strong>{presentationRegisters[register].shortLabel}</strong><span>{presentationRegisters[register].description}</span>
              </button>
            ))}
          </div>
        </section>
        <section className="settings-section privacy-section">
          <p className="folio">Prototype privacy</p><h2>What is kept here</h2>
          <p>Your name, preferences, answers, and progress are stored only in this browser’s local storage. The prototype has no learner account or server database and does not send this information to The Studium.</p>
          <p>Anyone using this browser profile may be able to open the guide report. Do not enter sensitive personal information.</p>
        </section>
        <section className="settings-section reset-section">
          <p className="folio">Begin again</p><h2>Reset this browser’s study</h2>
          <p>This removes the locally stored learner name, lesson answers, progress, presentation history, and feedback draft.</p>
          <button className="danger-button" onClick={() => setConfirmingReset(true)}>Reset all local study data</button>
        </section>
      </div>
      {confirmingReset && (
        <div className="modal-backdrop" role="presentation">
          <section className="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="reset-title" aria-describedby="reset-description">
            <p className="folio">Please confirm</p><h2 id="reset-title">Begin again on this browser?</h2>
            <p id="reset-description">Your local lesson responses and progress cannot be recovered after this action.</p>
            <div><button className="button ghost" autoFocus onClick={() => setConfirmingReset(false)}>Keep my study</button><button className="danger-button solid" onClick={resetStudy}>Reset everything</button></div>
          </section>
        </div>
      )}
    </main>
  );
}
