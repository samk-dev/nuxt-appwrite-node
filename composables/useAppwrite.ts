export const useAppwrite = () => {
  const { $appwrite } = useNuxtApp()
  if (!$appwrite) {
    console.log('Appwrite plugin not accessible')
  }
  return $appwrite
}
