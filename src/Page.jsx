import { useState } from 'react';
import MainCanvas from './MainCanvas';

const themes = ['red', 'yellow', 'blue'];

export default function Page() {
  const [selectedTheme, setSelectedTheme] = useState('red');

  return (
    <div className="page-wrapper">
      <section className="page-section">
        <MainCanvas theme={selectedTheme} />
      </section>
      <section className="page-section">
        <div className="page-section__button-group">
          {themes.map((theme) => {
            return (
              <button
                key={theme}
                className={`page-section__button theme-${theme}`}
                onClick={() => setSelectedTheme(theme)}
              >
                theme {theme}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
