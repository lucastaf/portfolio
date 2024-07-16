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
    type : string,
    knowledges : string[],
    description : string
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
    link : string
}