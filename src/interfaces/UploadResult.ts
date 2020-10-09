export interface UploadResult {
  movie_id: number
  keypoint_id: number
  drawing_result: DrawingResult
  keypoint: Keypoint
}

export interface DrawingResult {
  id: 72782
  keypoint: 73377
  rule: string
  backgroundRule: string
  execStatus: string
  drawingUrl: any
  comparison: any
  failureDetail: any
  createdAt: Date
  updatedAt: Date
}

export interface Keypoint {
  id: number
  movie: number
  createdAt: Date
  updatedAt: Date
}
