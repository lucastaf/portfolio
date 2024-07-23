function getImagePath(originalPath: string): string {
    if (originalPath.startsWith("/local/")){
        originalPath = originalPath.replace("/local",location.origin)
    }
    return originalPath
}

export default getImagePath;
