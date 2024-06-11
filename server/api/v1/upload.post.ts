export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { storage, inputeFile, ID } = useAppwriteSessionClient(event)

  try {
    const form = await readMultipartFormData(event)

    if (!form) {
      return createError('No file uploaded')
    }

    const fileField = form.find((field) => field.name === 'file')

    if (!fileField) {
      return createError('File field is missing')
    }

    const buffer = fileField.data
    const response = await storage.createFile(
      config.appwrite.bucketSsr,
      ID.unique(),
      inputeFile.fromBuffer(buffer, fileField.filename as string)
    )
    return response
  } catch (error) {
    return handleAppwriteException(error)
  }
})
