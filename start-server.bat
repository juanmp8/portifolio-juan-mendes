@echo off
echo ==========================================
echo   SERVIDOR LOCAL - PORTFÓLIO JUAN MENDES
echo ==========================================
echo.

REM Verificar se Python está instalado
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo ✅ Python encontrado! Iniciando servidor...
    echo.
    echo 🌐 Seu portfólio estará disponível em:
    echo    http://localhost:8000
    echo.
    echo 📝 Para parar o servidor, pressione Ctrl+C
    echo.
    echo ==========================================
    python -m http.server 8000
) else (
    echo ❌ Python não encontrado!
    echo.
    echo Para instalar Python:
    echo 1. Acesse https://python.org/downloads/
    echo 2. Baixe e instale a versão mais recente
    echo 3. Marque a opção "Add Python to PATH"
    echo 4. Execute este arquivo novamente
    echo.
    echo Alternativas:
    echo - Abra o arquivo index.html diretamente no navegador
    echo - Use Live Server no VS Code
    echo - Use Node.js: npx http-server
    echo.
)

pause
