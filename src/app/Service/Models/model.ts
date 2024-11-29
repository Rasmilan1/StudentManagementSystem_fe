export interface staff {
  id: number;
  name: string;
  email: string;
  phone: string;

}

// teacher.ts (Model)
export interface teacher {
  email: string;
  id: string;
  name: string;
  phone: string;
  subjectID: string;
}


export interface student {
  id: string;
  name: string;
  phone: string;
  enrollmentDate: string;
  classID: string;
}



export interface feedback {
  id: string; 
  userID:string;
  feedbackType:string;
  comments:string; 
}
