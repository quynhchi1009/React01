# useEffect
1. Cap nhat lai state
2. Cap nhat DOM (mutated)
3. Render lai UI
4. Goi cleanup neu deps thay doi
5. goi useEffect callback

# useLayoutEffect
1. Cap nhat lai state
2. Cap nhat DOM (mutated)
4. Goi cleanup neu deps thay doi (sync)
5. goi useEffect callback (sync)
3. Render lai UI

VD: Click button so dem, den so 3 thi quay tro ve 0, 1, 2, 3, 0, 1, 2, 3... -> useEffect