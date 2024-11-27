import { Routes } from '@angular/router';
import { StudentAttendanceComponent } from './Student/student-attendance/student-attendance.component';
import { StudentFeedbackComponent } from './Student/student-feedback/student-feedback.component';
import { StudentNotificationComponent } from './Student/student-notification/student-notification.component';
import { StudentTimetableComponent } from './Student/student-timetable/student-timetable.component';
import { StudentHomeComponent } from './Student/student-home/student-home.component';
import { RegisterStudentComponent } from './Staff/register-student/register-student.component';
import { MarkAttendanceComponent } from './Staff/mark-attendance/mark-attendance.component';
import { ManageTimetableComponent } from './Staff/manage-timetable/manage-timetable.component';
import { LoginComponent } from './Auth/login/login.component';
import { EditProfileComponent } from './Student/edit-profile/edit-profile.component';

import { DashboardComponent } from './Administrator/dashboard/dashboard.component';
import { AdminViewAttendanceComponent } from './Administrator/admin-view-attendance/admin-view-attendance.component';
import { AdminViewFeedbackComponent } from './Administrator/admin-view-feedback/admin-view-feedback.component';
import { AdminViewTimetablesComponent } from './Administrator/admin-view-timetables/admin-view-timetables.component';
import { TeacherNotificationComponent } from './Teacher/teacher-notification/teacher-notification.component';
import { TeacherFeedbackComponent } from './Teacher/teacher-feedback/teacher-feedback.component';
import { TeacherProfileComponent } from './Teacher/teacher-profile/teacher-profile.component';
import { TeacherTimetableComponent } from './Teacher/teacher-timetable/teacher-timetable.component';
import { ViewStudentsComponent } from './Staff/view-students/view-students.component';
import { ViewClassComponent } from './Staff/view-class/view-class.component';
import { TeacherAddUpdateComponent } from './Administrator/teacher-add-update/teacher-add-update.component';
import { StaffAddUpdateComponent } from './Administrator/staff-add-update/staff-add-update.component';
import { ViewTeacherComponent } from './Administrator/view-teacher/view-teacher.component';
import { ViewStaffComponent } from './Administrator/view-staff/view-staff.component';
import { ViewSubjectComponent } from './Staff/view-subject/view-subject.component';

export const routes: Routes = [
    // for student
    {path : '', component: StudentHomeComponent },
    {path : 'attendance', component: StudentAttendanceComponent },
    {path : 'feedback', component: StudentFeedbackComponent },
    {path : 'notification', component: StudentNotificationComponent },
    {path : 'timetable', component: StudentTimetableComponent },
    {path : 'edit-profile/:id', component: EditProfileComponent },


    //for staff
    {path : 'student-register', component: RegisterStudentComponent},
    {path : 'studentupdate/:id', component : RegisterStudentComponent},
    {path : 'mark-attendance' , component: MarkAttendanceComponent},
    {path : 'manage-timetable' , component: ManageTimetableComponent},
    {path : 'viewStudents', component: ViewStudentsComponent },
    {path : 'viewClass', component: ViewClassComponent },
    {path : 'viewSubject', component: ViewSubjectComponent },

    //for admin
    {path : '', component: DashboardComponent },
    {path : 'viewAttendance', component: AdminViewAttendanceComponent },
    {path : 'viewFeedback', component: AdminViewFeedbackComponent },
    {path : 'viewTimetable', component: AdminViewTimetablesComponent },
    {path : 'viewTeacher', component: ViewTeacherComponent },
    {path : 'ViewStaff', component: ViewStaffComponent },
    {path : 'addStaff', component: StaffAddUpdateComponent },
    {path : 'staffupdate/:id', component: StaffAddUpdateComponent },
    {path : 'addTeacher', component: TeacherAddUpdateComponent },
    {path : 'teacherupdate/:id', component: TeacherAddUpdateComponent },
    

    //for teachers
    {path : 't-notification', component: TeacherNotificationComponent },
    {path : 't-feedback', component: TeacherFeedbackComponent },
    {path : 't-profile/:id', component: TeacherProfileComponent },
    {path : 't-timetable', component: TeacherTimetableComponent },
    {path : 't-home', component: EditProfileComponent },

];
