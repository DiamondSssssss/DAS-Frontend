export const gradeFormat = (grade) => {
  switch (grade) {
    case 1:
      return "Khối 1";
    case 2:
      return "Khối 2";
    case 3:
      return "Khối 3";
    case 4:
      return "Khối 4";
    case 5:
      return "Khối 5";
    case 6:
      return "Khối 6";
    case 7:
      return "Khối 7";
    case 8:
      return "Khối 8";
    case 9:
      return "Khối 9";
    case 10:
      return "Khối 10";
    case 11:
      return "Khối 11";
    case 12:
      return "Khối 12";
    default:
      return "Invalid grade";
  }
};

export const subjectFormat = (subject) => {
  switch (subject) {
    case 1:
      return "Toán";
    case 2:
      return "Ngữ Văn (Tiếng Việt)";
    case 3:
      return "Tiếng Anh";
    case 4:
      return "Vật Lý";
    case 5:
      return "Hóa Học";
    case 6:
      return "Sinh Học";
    case 7:
      return "Lịch Sử";
    case 8:
      return "Địa Lý";
    case 9:
      return "Giáo Dục Công Dân";
    case 10:
      return "Công Nghệ";
    case 11:
      return "Tin Học";
    case 12:
      return "Giáo Dục Quốc Phòng";
    default:
      return "Khác";
  }
};
export const examStatusFormat = (statusCode) => {
  switch (statusCode) {
    case 0:
      return "Chưa chấm";
    case 1:
      return "Đã chấm";
  }
};

export const examMarkStatusFormat = (statusCode) => {
  switch (statusCode) {
    case 0:
      return "Chưa nộp bài";
    case 1:
      return "Đã nộp bài";
    case 2:
      return "Không nộp bài";
  }
};

export const statusColorFormat = (statusCode) => {
  switch (statusCode) {
    case 0:
      return "yellow";
    case 1:
      return "green";
    case 2:
      return "red";
  }
};

export const userTypeFormat = (type) => {
  switch (type) {
    case 0:
      return "Admin hệ thống";
    case 1:
      return "Giáo viên";
    case 2:
      return "Chuyên gia";
    default:
      return "Khác";
  }
};
export const difficultFormat = (type) => {
  switch (type) {
    case 0:
      return "Nhận biết";
    case 1:
      return "Thông Hiểu";
    case 2:
      return "Vận Dụng";
    case 3:
      return "Vận Dụng Cao";
    default:
      return "Khác";
  }
};
