import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { PATH } from "./constants";
import Login from "Pages/Login";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "Pages/ErrorPage";
import Header from "components/Header";
import CustomDrawer from "components/CustomDrawer";
import CustomBreadcrumb from "components/CustomBreadcrumb";
import HomePage from "Pages/Homepage";
import LoadingPage from "Pages/LoadingPage";
import { useSelector } from "react-redux";
import { SignUpMoreDetail } from "Pages/SignUpMoreDetail";
import { ExamBank } from "Pages/ExamBank";
import UsersPage from "Pages/UserPage/UsersPage";
import ProfilePage from "Pages/ProfilePage";
import SubjectPage from "Pages/SubjectPage/SubjectPage";
import SchoolPage from "Pages/SchoolPage/SchoolPage";
import TestSamplePage from "Pages/TestSamplePage/TestSamplePage";
import AnswerSamplePage from "Pages/AnswerSamplePage/AnswerSamplePage";
import SubjectDetails from "Pages/SubjectPage/SubjectDetails";
import { ExamBankDetail } from "Pages/ExamBankDetail";
import { RequireApprove } from "Pages/RequireApprove";
import { RequireApproveDetails } from "Pages/RequireApproveDetails";
import SchoolDetails from "Pages/SchoolPage/SchoolDetails";
import ClassPage from "Pages/ClassPage/ClassPage";
import ClassDetails from "Pages/ClassPage/ClassDetails";
import TestDetails from "Pages/TestPage/TestDetails";
import TestPage from "Pages/TestPage/TestPage";
import MatrixPage from "Pages/MatrixPage/MatrixPage";
import SellPage from "Pages/SellPage/SellPage";
import { ManageExam } from "Pages/ManageExam/ManageExam";
import { ManagExamDetail } from "Pages/ManagExamDetail";
import { SuperMarketExam } from "Pages/SuperMarketExam";
import { ListPay } from "Pages/ListPay";
import { ListPayDetails } from "Pages/ListPayDetails";
import { ListBought } from "Pages/ListBought";
import { ListBoughtDetails } from "Pages/ListBoughtDetails";
import DownloadPage from "Pages/DownloadPage";
import { SupermarketDetails } from "Pages/SupermarketDetails";
import Button from "components/Button";
import CustomSnackBar from "components/CustomSnackBar";
import AnswerSample from "Pages/AnswerSamplePage/AnswerSample";
import PaymentPage from "Pages/PaymentPage";
import TransactionHistoryPage from "Pages/TransactionHistoryPage";

const Layout = () => {
  // @ts-ignore
  const { loading, snackbar } = useSelector((state) => state.app);
  return (
    <div className="flex flex-col h-[100vh]">
      {loading && <LoadingPage />}
      <CustomSnackBar {...snackbar} />

      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="mt-[70px] flex-1 flex flex-row gap-1 w-full h-[95vh] overflow-hidden bg-[#F6F6F6]">
        <CustomDrawer />
        <div className="relative flex-1 p-2">
          <CustomBreadcrumb />
          <div className="h-[87%] rounded-sm">
            <Outlet />
          </div>
          <div className="w-full font-thin text-center font-baloo2 text-text_form">
            2024 FPT University. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
const routes = [
  {
    path: PATH.HOME,
    element: <PrivateRoute element={<HomePage />} />,
  },
  {
    path: PATH.USERS,
    element: <PrivateRoute element={<UsersPage />} />,
  },
  {
    path: PATH.PROFILE,
    element: <PrivateRoute element={<ProfilePage />} />,
  },
  {
    path: PATH.SUBJECTS + "/:id",
    element: <PrivateRoute element={<SubjectDetails />} />,
  },
  {
    path: PATH.SUBJECTS,
    element: <PrivateRoute element={<SubjectPage />} />,
  },
  {
    path: PATH.SCHOOLS + "/:id",
    element: <PrivateRoute element={<SchoolDetails />} />,
  },
  {
    path: PATH.SCHOOLS,
    element: <PrivateRoute element={<SchoolPage />} />,
  },
  {
    path: PATH.CLASSES + "/:id",
    element: <PrivateRoute element={<ClassDetails />} />,
  },
  {
    path: PATH.TEST + "/:id",
    element: <PrivateRoute element={<TestDetails />} />,
  },
  {
    path: PATH.TEST,
    element: <PrivateRoute element={<TestPage />} />,
  },
  {
    path: PATH.CLASSES,
    element: <PrivateRoute element={<ClassPage />} />,
  },
  {
    path: PATH.TEST_SAMPLE,
    element: <PrivateRoute element={<TestSamplePage />} />,
  },
  {
    path: PATH.ANSWER_SAMPLE + "/:id",
    element: <PrivateRoute element={<AnswerSample />} />,
  },
  {
    path: PATH.ANSWER_SAMPLE,
    element: <PrivateRoute element={<AnswerSamplePage />} />,
  },
  {
    path: PATH.EXAMBANK,
    element: <PrivateRoute element={<ExamBank />} />,
  },
  {
    path: PATH.EXAMBANK + "/:id",
    element: <PrivateRoute element={<ExamBankDetail />} />,
  },
  {
    path: PATH.REQUIREAPPROVE,
    element: <PrivateRoute element={<RequireApprove />} />,
  },
  {
    path: PATH.MANAGEEXAM,
    element: <PrivateRoute element={<ManageExam />} />,
  },
  {
    path: PATH.MANAGEEXAM + "/:id",
    element: <PrivateRoute element={<ManagExamDetail />} />,
  },
  {
    path: PATH.REQUIREAPPROVE + "/:id",
    element: <PrivateRoute element={<RequireApproveDetails />} />,
  },
  {
    path: PATH.MATRIX,
    element: <PrivateRoute element={<MatrixPage />} />,
  },
  {
    path: PATH.SELL,
    element: <PrivateRoute element={<SellPage />} />,
  },
  {
    path: PATH.SUPERMARKETEXAMALL,
    element: <PrivateRoute element={<SuperMarketExam />} />,
  },
  {
    path: PATH.SUPERMARKETEXAMALL + "/:id",
    element: <PrivateRoute element={<SupermarketDetails />} />,
  },
  {
    path: PATH.LISTPAY,
    element: <PrivateRoute element={<ListPay />} />,
  },
  {
    path: PATH.LISTPAY + "/:id",
    element: <PrivateRoute element={<ListPayDetails />} />,
  },
  {
    path: PATH.LISTBOUGHT,
    element: <PrivateRoute element={<ListBought />} />,
  },
  {
    path: PATH.LISTBOUGHT + "/:id",
    element: <PrivateRoute element={<ListBoughtDetails />} />,
  },
  {
    path: PATH.DOWNLOAD,
    element: <PrivateRoute element={<DownloadPage />} />,
  },
  {
    path: PATH.PAYMENT,
    element: <PrivateRoute element={<PaymentPage />} />,
  },
  {
    path: PATH.TRANSACTION,
    element: <PrivateRoute element={<TransactionHistoryPage />} />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
];
//Setting Router
export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.SIGNUPDETAIL,
    element: <SignUpMoreDetail />,
  },
]);
