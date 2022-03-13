export const getTimePassed = (date: number, reference: number = -1): string => {
  if (reference < 0) reference = Date.now();
  const delta: number = Math.abs(reference - date);

  let ds = Math.floor((delta / 1000) % 60);
  let dm = Math.floor((delta / (1000 * 60)) % 60);
  let dh = Math.floor((delta / (1000 * 60 * 60)) % 24);
  let dD = Math.floor((delta / (1000 * 60 * 60 * 24)) % 30);
  let dM = Math.floor((delta / (1000 * 60 * 60 * 24 * 30)) % 12);
  let dY = Math.floor(delta / (1000 * 60 * 60 * 24 * 30 * 12));

  if (dY > 0) return `${dY} Y`;
  if (dM > 0) return `${dM} M`;
  if (dD > 0) return `${dD} D`;
  if (dh > 0) return `${dh} Hr`;
  if (dm > 0) return `${dm} Min`;
  return `${ds} Sec`;
};
