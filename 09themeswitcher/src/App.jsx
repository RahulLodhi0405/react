import { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './components/ThemeBtn'; 
import Card from './components/Card';// Ensure ThemeProvider is correctly imported
// Remove the `import { document } from 'postcss'` line

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Change the theme when themeMode changes
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn /> {/* Ensure ThemeBtn component is defined */}
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card /> {/* Ensure Card component is defined */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

