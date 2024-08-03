function getImagePath(originalPath: string | undefined): string {
    if (typeof originalPath != "string") return ""
    if (originalPath.startsWith("/local/")){
        originalPath = originalPath.replace("/local",location.origin)
    }
    return originalPath
}

export default getImagePath;
