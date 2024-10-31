import qrcode

# URL 설정
url = "https://kuai-lab.github.io/neurips2024udga"

# QR 코드 생성
qr = qrcode.make(url)

# QR 코드 이미지 저장
qr.save("neurips2024udga/image/project_page_qr.png")
