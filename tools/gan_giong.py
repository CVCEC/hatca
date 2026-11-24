#!/usr/bin/env python3
"""Bật amThanh: true trong data/bai-hat.js cho bài đã có ĐỦ tệp (ca-bai.mp3 và mọi cau-NN.mp3) trong audio/<ma-bai>/.
Robot giọng đọc AI (tools/giong_ai.py) chạy tệp này sau mỗi lô. Bài chưa đủ tệp thì giữ nguyên."""
import pathlib, re
ROOT = pathlib.Path(__file__).resolve().parent.parent
p = ROOT / 'data/bai-hat.js'
s = p.read_text(encoding='utf-8')
can = {}
for l in (ROOT / 'giong-ai/can-doc.tsv').read_text(encoding='utf-8').splitlines()[1:]:
    tep = l.split('\t')[0]
    m = re.match(r'audio/([^/]+)/', tep)
    if m: can.setdefault(m.group(1), []).append(tep)
bat = [ma for ma, ds in can.items() if all((ROOT / t).exists() for t in ds)]
for ma in bat:
    s = re.sub(r'(ma: "' + re.escape(ma) + r'",(?:(?!\n    \{)[\s\S])*?amThanh: )false', r'\1true', s, count=1)
p.write_text(s, encoding='utf-8')
print('Bài đã bật âm thanh:', ', '.join(bat) or '(chưa có)')
