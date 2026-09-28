export interface Project {
  readonly title: string
  readonly type: string
  readonly desc: string
  readonly from: string | null
  readonly to: string | null
  readonly techs: readonly string[]
  readonly link: string | null
}
