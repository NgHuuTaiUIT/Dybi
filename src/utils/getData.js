import { cloneDeep } from "lodash";
// import datas from "../assets/data/data_offline.json";

// export const getCategories = id => {
//   return datas.categories;
// };

// export const getData = () =>{
//   let data;
//   const api = async () => {
//     await fetch(`${process.env.PUBLIC_URL}/assets/data/data.json`, {
//       method: "GET",
//       // headers: {
//       //   "Content-Type": "application/json",
//       //   Accept: "application/json"
//       // }
//     })
//       .then(res => console.log(res.json()))
//       .then(data => {
//         console.log(data);
//         const tempData = cloneDeep(JSON.parse(data));
//         data = cloneDeep(tempData);
//       });
//   };
//    api();
//    return data;
// }

const dataTab1 = [
  {
    header: "1. SỐ HÓA TÀI LIỆU",
    body: {
      type: "normal",
      children: [
        {
          text: "Thực hiện scan chụp các tài liệu giấy, sau đó điều chỉnh phù hợp và chuyển thành các định dạng png, pdf, ebook,... để dễ dàng chia sẻ trên mạng internet.",
          title: "Số hoá tài liệu in ấn",
          background: "./assets/images/bg-sohoa.png"
        },
        {
          text: "Scan quét các bản mộc bản, châu bản, dịch thuật và 3D hoá để công chúng dễ dàng tiếp cận hơn, nhưng không gây ra ảnh hưởng đến các cổ vật.",
          title: "Số hoá mộc bản, châu bản",
          background: "./assets/images/bg-sohoa.png"
        },
        {
          text: "Số hoá các vật mang thông tin khác trên các loại chất liệu đặc thù như bằng vải, gỗ,... nhưng vẫn đảm bảo tối đa về chất lượng hình ảnh, nội dung trên các hiện vật.",
          title: "Số hoá vật mang tin bằng các loại chất liệu đặc thù",
          background: "./assets/images/bg-sohoa.png"
        }
      ]
    }
  },
  {
    header: "2. SỐ HÓA VR - AR",
    body: {
      type: "has-children",
      children: [
        {
          header: "A. SỐ HÓA VR",
          body: {
            type: "normal",
            children: [
              {
                text: "Xây dựng không gian ảo được dựng từ ảnh chụp không gian trong thực tế, phù hợp cho: Di tích, bất động sản, địa điểm du lịch, viện bảo tàng,...",
                title: "Triển lãm Realistic VR",
                background: "./assets/images/bg-sohoa.png"
              },
              {
                text: "Không gian tham quan ảo hoàn toàn dựng bằng mô hình kiến trúc 3D, phù hợp với các dự án theo từng chủ đề với định hướng mỹ thuật độc đáo riêng dành cho nội dung thể hiện mà ngoài môi trường thật không có, hoặc các dự án cần không gian ảo làm mẫu trước khi xây dựng thực tế.",
                title: "Triển lãm Conceptual VR",
                background: "./assets/images/bg-sohoa.png"
              },
              {
                text: "Triển lãm Mix VR là sự kết hợp giữa Realistic VR Tour và Conceptual VR Tour. Sự kết hợp độc đáo phù hợp để tiết kiệm chi phí với Realistic nhưng vẫn có sự đặc biệt với Conceptual ảo theo yêu cầu.",
                title: "Triển lãm Mix VR",
                background: "./assets/images/bg-sohoa.png"
              }
            ]
          }
        },
        {
          header: "B. SỐ HÓA AR",
          body: {
            type: "normal",
            children: [
              {
                text: "Dùng camera quét hình ảnh để hiển thị các nội dung media. Phù hợp với sản phẩm in ấn (thiệp, namecard, poster,...) và các trải nghiệm khác có hình ảnh cụ thể.",
                title: "AR Tracking hình ảnh",
                background: "./assets/images/bg-sohoa.png"
              },
              {
                text: "Dùng camera quét mặt phẳng để hiển thị các nội dung 3D. Phù hợp để xem các cổ vật, sản phẩm nội thất, gia dụng và có thể áp dụng cho cả bất động sản.",
                title: "AR Tracking mặt phẳng",
                background: "./assets/images/bg-sohoa.png"
              }
            ]
          }
        }
      ]
    }
  },
  {
    header: "3. SỐ HÓA 3D TRƯNG BÀY",
    body: {
      type: "normal",
      children: [
        {
          text: "Thực hiện số hoá 3D các hiện vật, cổ vật giúp tạo ra một phiên bản ảo của hiện vật và phục vụ tốt hơn cho việc										trưng bày, chia sẻ đến nhiều người nhưng không gây ảnh hưởng đến hiện vật thật.",
          title: "Số hoá 3D trưng bày",
          background: "./assets/images/bg-sohoa.png"
        }
      ]
    }
  },
  {
    header: "4. TRUYỀN THÔNG ONLINE - OFFLINE",
    body: {
      type: "has-children",
      children: [
        {
          header: "A. TRUYỀN THÔNG ONLINE",
          body: {
            type: "normal",
            children: [
              {
                text: "Giúp người dùng có thể tham gia vào các hội thảo trực tuyến một cách liền mạch, nhiều đầu cầu khắp nơi trên thế giới và có thể livestream trực tiếp lên các Fanpage, Youtube để kết nối nhiều người tham gia hơn.",
                title: "Hội thảo trực tuyến",
                background: "./assets/images/bg-sohoa.png"
              },
              {
                text: "Không chỉ tham quan tour, DyBi có thể thực hiện các game giải đố, các game có tính tương tác cao và phù hợp với nội dung của triển lãm.",
                title: "Game trên nền tảng VR tour",
                background: "./assets/images/bg-sohoa.png"
              },
              {
                text: "Giúp người dùng từ khắp mọi nơi có thể tham gia tương tác trong một không gian ảo, tham gia vào các giải thể thao online,...",
                title: "Tương tác show diễn thực tế ảo/ VStation",
                background: "./assets/images/bg-sohoa.png"
              },
              {
                text: "Phát triển các ứng dụng (app) theo yêu cầu dành riêng cho lĩnh vực văn hoá. Ví dụ như: App văn hoá đọc; ứng dụng web S Gallery, Ứng dụng thư viện Ebook online/ offline về Nguyễn Đình Chiểu,...",
                title: "Xây dựng ứng dụng riêng cho lĩnh vực văn hoá",
                background: "./assets/images/bg-sohoa.png"
              }
            ]
          }
        },
        {
          header: "B. TRUYỀN THÔNG OFFLINE",
          body: {
            type: "normal",
            children: [
              {
                text: "Tổ chức ứng dụng, cho thuê các thiết bị như kính VR, màn hình chạm với hệ thống đồng bộ phục vụ cho nhu cầu trải nghiệm công nghệ VR/AR cho các sự kiện nhãn hàng, truyền thông, giáo dục.",
                title: "Cung cấp thiết bị",
                background: "./assets/images/bg-sohoa.png"
              },
              {
                text: "Lên thiết kế, concept không gian cho các sự kiện, Booth công nghệ/ Thư viện thông minh",
                title: "Xây dựng concept không gian",
                background: "./assets/images/bg-sohoa.png"
              },
              {
                text: "Activation trong sự kiện, tương tác màn hình chạm, trải nghiệm thực tế ảo trong không gian theo chủ đề (Ngày hội văn hóa đọc, di sản học đường,..)",
                title: "Xây dựng concept chủ đề",
                background: "./assets/images/bg-sohoa.png"
              }
            ]
          }
        }
      ]
    }
  }
];
const dataTab2 = [
  {
    header: "DANH NHÂN",
    body: {
      type: "normal",
      children: [
        {
          text: "Nhà trưng bày được xây dựng nhằm góp phần phục vụ tốt hơn nhu cầu tham quan, học tập, tìm hiểu về Chủ tịch Hồ Chí Minh, thông qua hai chuyên đề: Chủ tịch Hồ Chí Minh danh nhân văn hoá kiệt xuất và Chủ tịch Hồ Chí Minh với thể dục thể thao Việt Nam.",
          title: "HỒ CHÍ MINH DANH NHÂN VĂN HÓA KIỆT XUẤT",
          background: "./assets/images/danhnhan-1.png",
          sub: "Nhà trưng bày",
          href:"https://refs.sgallery.vn/hcm/vrtour/"
        },
        {
          text: "Đây là một trong những hoạt động trưng bày đã triển khai dịp kỷ niệm 200 năm Ngày sinh Danh nhân Nguyễn Đình Chiểu, tại Di tích Quốc gia đặc biệt Mộ và Khu lưu niệm Nguyễn Đình Chiểu. Hoạt động trưng bày ảo thông qua kỹ thuật công nghệ số - là một trong những nội dung trình gửi UNESCO để chính thức thông qua nghị quyết vinh danh Nguyễn Đình Chiểu là nhà thơ, nhà văn hóa lớn của nhân loại.",
          title: "NGUYỄN ĐÌNH CHIỂU CUỘC ĐỜI VÀ SỰ NGHIỆP",
          background: "./assets/images/danhnhan-2.png",
          sub: "Triển lãm",
          href:"https://refs.sgallery.vn/ndc/vrtour/"
        }
      ]
    }
  },
  {
    header: "SỰ KIỆN",
    body: {
      type: "normal",
      children: [
        {
          text: "Triển lãm nhằm tôn vinh, phát huy giá trị lịch sử - văn hóa của di tích Dinh trấn Thanh Chiêm và sự ra đời chữ Quốc ngữ, tạo điều kiện mở rộng quảng bá và phát triển du lịch nhằm góp phần phát triển kinh tế - xã hội của Thị xã Điện Bàn, tỉnh Quảng Nam.",
          title: "420 NĂM DINH TRẤN THANH CHIÊM",
          background: "./assets/images/sukien-1.png",
          sub: "Nhà trưng bày",
          href:"https://refs.sgallery.vn/baotangquangnam/vrtour/"
        },
        {
          text: "Triển lãm “Hậu Phương Thời Chiến” do Trung Tâm Lưu Trữ Quốc Gia IV và đội ngũ DyBi thực hiện, giới thiệu hơn 100 tác phẩm của nhiếp ảnh gia Mầu Hoàng Thiết về hoàn cảnh lịch sử, những năm 1959 – 1975, hậu phương miền Bắc đã hỗ trợ đắc lực sức người, sức của cho “thành đồng” miền Nam ruột thịt trong cuộc kháng chiến chống Mỹ cứu nước,",
          title: "HẬU PHƯƠNG THỜI CHIẾN",
          background: "./assets/images/sukien-2.png",
          sub: "Triển lãm",
          href:"https://sgallery.vn/exhibition/47"
        }
      ]
    }
  },
  {
    header: "LỊCH SỬ",
    body: {
      type: "normal",
      children: [
        {
          text: "Một sản phẩm khác do DyBi phối hợp cùng Trung Tâm Lưu Trữ Quốc Gia IV thực hiện chính là Thiên Hùng Ca Sử Việt”, kể về lịch sử 4000 năm của dân tộc, các thế hệ người Việt đã viết nên những bản hùng ca vẻ vang về quá trình dựng nước và giữ nước.",
          title: "THIÊN HÙNG CA SỬ VIỆT",
          background: "./assets/images/lichsu-1.png",
          sub: "Triển lãm",
          href:"https://sgallery.vn/exhibition/48"
        }
      ]
    }
  },
  {
    header: "NGHỆ THUẬT",
    body: {
      type: "normal",
      children: [
        {
          text: "Triển lãm tranh Trịnh Công Sơn - “Lời thiên thu gọi” là triển lãm lần đầu tiên áp dụng công nghệ thực tế ảo vào triển lãm đã thổi một luồng sinh khí mới vào lĩnh vực nghệ thuật, góp thêm một cách tiếp cận, thưởng lãm sinh động và xóa nhòa mọi ranh giới về thời gian, không gian cho công chúng.",
          title: "LỜI THIÊN THU GỌI",
          background: "./assets/images/nghethuat-1.png",
          sub: "Triển lãm tranh",
          href:"https://sgallery.vn/exhibition/63"
        },
        {
          text: "Triển lãm tranh Đinh Phong - “Người bay & Giấc mơ siêu thực” là triển lãm trực tuyến, diễn ra song song với triển lãm của họa sĩ tại Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh, lan tỏa những niềm đồng điệu về hội họa của họa sĩ tới công chúng thưởng lãm nghệ thuật.",
          title: "NGƯỜI BAY VÀ GIẤC MƠ SIÊU THỰC",
          background: "./assets/images/nghethuat-2.png",
          sub: "Triển lãm tranh",
          href:"https://sgallery.vn/exhibition/46"
        }
      ]
    }
  },
  {
    header: "LÀNG NGHỀ",
    body: {
      type: "normal",
      children: [
        {
          text: "Trúc Chỉ là Nghệ - thuật - giấy, Giấy – nghệ - thuật của Việt Nam, một Giá trị Việt mới có điểm khởi đầu và quê hương tại Cố đô Huế.",
          title: "TRÚC CHỈ",
          background: "./assets/images/langnghe-1.png",
          sub: "",
          href:"https://refs.sgallery.vn/trucchi/showroomvr"
        }
      ]
    }
  }
];
export const getData = tab => {
  let data = [];
  switch (tab) {
    case 0:
      data = dataTab1;
      break;
    case 1:
      data = dataTab2;
      break;
    default:
      data = dataTab1;
      break;
  }
  return data;
};
