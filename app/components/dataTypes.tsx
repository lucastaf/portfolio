export type knowledge = {
    name : string,
    icon : string,
    affinity : number,
    type? : string,
    description? : string,
}

export type project = {
    name : string,
    icon : string,
    status : string,
    link : string,
    time: string,
    type : string,
    knowledges : string[],
    description : string,
}

export type experience = {
    name : string,
    role : string,
    time : string,
    icon : string,
    location : string,
    type : string,
    knowledges : string[],
    description : string

}

export type timeline = {
    name : string,
    icon : string,
    description : string,
    time : string,
    link? : string
}

export type projectTypes = {
    title : string,
    name : string
}
export type dataStatus = "loading" | "success" | "error"