# Real-Time-Push-Notifications-with-Socket.IO

## API Request Documentation

### Send Message

Endpoint ini digunakan untuk mengirim pesan ke server.

**URL**: `http://localhost:5000/send`

**Method**: `POST`

**Headers**:

- `Content-Type: application/json`

**Request Body**:

Kirimkan data dalam format JSON dengan struktur berikut:

```json
{
  "message": "Kamu"
}
```

- `message` : String yang berisi pesan yang ingin dikirim.

**Contoh Penggunaan dengan cURL**:

```bash
curl --location 'http://localhost:5000/send' \
--header 'Content-Type: application/json' \
--data '{
    "message": "Kamu"
}'
```

**Response**:

Server akan mengembalikan response sesuai dengan implementasi API, misalnya:

- **200 OK**: Jika pesan berhasil diterima.
- **400 Bad Request**: Jika format request salah.

## Contoh ketika api http://localhost:5000/send di atas di hit:

  ![image](https://github.com/user-attachments/assets/3db9a850-12a4-4ed8-8d7a-603357f23962)

