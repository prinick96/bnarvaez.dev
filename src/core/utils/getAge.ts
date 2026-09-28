export const getAge = (birthday: Date, today: Date): number => {
  const years = today.getFullYear() - birthday.getFullYear()
  const monthDifference = today.getMonth() - birthday.getMonth()
  const birthdayIsPending = monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())

  return years - Number(birthdayIsPending)
}
