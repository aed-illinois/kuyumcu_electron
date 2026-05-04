# Kuyumcu Stok Yönetimi - Kurulum Kılavuzu

---

## YÖNTEM 1: Sadece HTML (En Kolay)
kuyumcu.html dosyasına çift tıklayın, tarayıcıda açılır.
Veriler tarayıcının localStorage'ında saklanır.

---

## YÖNTEM 2: Electron (Windows .exe)

### Gereksinimler
- Node.js (https://nodejs.org) — LTS sürümü indirin

### Adımlar

1. `kuyumcu_electron` klasörüne girin:
   ```
   cd kuyumcu_electron
   ```

2. Bağımlılıkları yükleyin:
   ```
   npm install
   ```

3. Uygulamayı başlatın (test için):
   ```
   npm start
   ```

4. Windows kurulum dosyası (.exe installer) oluşturmak için:
   ```
   npm run build-win
   ```
   `dist/` klasöründe kurulum dosyası oluşur.

---

## YÖNTEM 3: Python (pywebview)

### Gereksinimler
- Python 3.8+ (https://python.org)

### Adımlar

1. `kuyumcu_python` klasörüne girin:
   ```
   cd kuyumcu_python
   ```

2. Gereksinimleri yükleyin:
   ```
   pip install pywebview
   ```

3. Uygulamayı başlatın:
   ```
   python kuyumcu_app.py
   ```

4. Tek dosya .exe oluşturmak için:
   ```
   pip install pyinstaller
   pyinstaller kuyumcu.spec
   ```
   `dist/KuyumcuStok.exe` dosyası oluşur.

---

## Notlar
- kuyumcu.html dosyası her iki klasörde de bulunmalıdır.
- Electron sürümünde veriler otomatik kaydedilir (localStorage).
- Python sürümünde veriler tarayıcı gibi localStorage'da saklanır.
