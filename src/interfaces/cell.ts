export default interface CellInterface {
  id: string
  selected: boolean
  value: string
  maybe: string
  state: "error" | "success" | "none"
  type: "default" | "special"
}
