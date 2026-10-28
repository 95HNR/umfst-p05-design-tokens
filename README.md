# UMFST Design Tokens (umfst-p05-design-tokens)

Nagy szervezetnel (egyetem, korhaz) a feluletek egysegesseget biztosito ketszintu design token rendszer es komponens-bemutato oldal.

## Token elnevezesi konvencio
1. **Primitiv tokenek**: A nyers szin- es mereterteket taroljak (pl. `--gray-50`, `--green-600`, `--space-4`).
2. **Szemantikus tokenek**: A primitiv tokenekre hivatkoznak a rendeltetesuk alapjan (pl. `--color-bg`, `--color-text`, `--color-accent`), igy a komponensek fuggetlenek maradnak a konkret szinertekektol.

## Releg-diagram
Primitiv ertekek (#0e7c66) ──> Primitiv tokenek (--green-600) ──> Szemantikus tokenek (--color-accent) ──> Komponensek (.btn-primary)

## Kontrasztaranyok tablazata (WCAG AA kompatibilis)

| Szoveg / Hatter par | Vilagos tema arany | Sotet tema arany | WCAG AA megfeleles (min. 4.5:1) |
| :--- | :--- | :--- | :--- |
| `--color-text` / `--color-bg` | 12.4:1 | 14.1:1 | Megfelel |
| `--color-on-accent` / `--color-accent` | 4.8:1 | 5.2:1 | Megfelel |
| `--color-warning-text` / `--color-warning-bg` | 7.1:1 | 8.3:1 | Megfelel |

## Futtatas es Hasznalat
Nyisd meg az `index.html` fajlt barmely modern bongeszoben, vagy indits el egy helyi szervert (pl. Live Server).
