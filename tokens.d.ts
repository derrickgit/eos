// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface Token {
    name:        string;
    account:     string;
    symbol:      string;
    precision:   number;
    logo:        string;
    website:     string;
    desc:        Description | string;
    links:       Links;
    whitepaper:  string;
}

export interface Description {
    en:  string;
    [language: string]: string;
}

export interface Links {
    twitter:    string;
    telegram:   string;
    medium:     string;
    facebook:   string;
    reddit:     string;
    github:     string;
    steemit:    string;
    wechat:     string;
    [link: string]: string;
}

declare const tokens: Token[]
export default tokens;
