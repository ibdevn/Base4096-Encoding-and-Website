import json

base4096_codepoints = []

def load_table():
    with open("emoji_base4096_table.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    return [int(entry["codepoint"][2:], 16) for entry in data["symbols"]]

def init_table():
    global base4096_codepoints
    base4096_codepoints = load_table()

def base4096_encode(data: bytes) -> str:
    result = ""
    buffer = 0
    bits_in_buffer = 0
    for byte in data:
        buffer = (buffer << 8) | byte
        bits_in_buffer += 8
        while bits_in_buffer >= 12:
            bits_in_buffer -= 12
            index = (buffer >> bits_in_buffer) & 0xFFF
            result += chr(base4096_codepoints[index])
    if bits_in_buffer > 0:
        index = (buffer << (12 - bits_in_buffer)) & 0xFFF
        result += chr(base4096_codepoints[index])
    return result

def base4096_decode(text: str) -> bytes:
    decode_map = {chr(cp): i for i, cp in enumerate(base4096_codepoints)}
    buffer = 0
    bits_in_buffer = 0
    output = bytearray()
    for ch in text:
        index = decode_map.get(ch)
        if index is None:
            raise ValueError(f"Ungültiges Symbol: {ch}")
        buffer = (buffer << 12) | index
        bits_in_buffer += 12
        while bits_in_buffer >= 8:
            bits_in_buffer -= 8
            output.append((buffer >> bits_in_buffer) & 0xFF)
    return bytes(output)