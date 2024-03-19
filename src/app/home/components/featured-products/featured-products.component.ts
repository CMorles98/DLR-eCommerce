import { Component, inject } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/product.interface';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent {
  public utilsService: UtilsService = inject(UtilsService)

  products: IProduct[] = [
    {
      id: "641e887d05f9ee1717e1348a",
      sku: "NTB7SDVX44",
      isNew: true,
      bgColor: "#E3E3E3",
      img: "https://i.ibb.co/WVdTgR8/headphone-1.png",
      title: "Audífonos Cat Ear",
      slug: "headphones-wireless.",
      unit: "3pcs",
      differentPrices: true,
      imageURLs: [
        {
          color: {
            name: "Purply Blue",
            clrCode: "#C1BAE4",
          },
          img: "https://i.ibb.co/WVdTgR8/headphone-1.png",
        },
        {
          color: {
            name: "Light Grey",
            clrCode: "#D8D7DD",
          },
          img: "https://i.ibb.co/zh9x3Q0/headphone-2.png",
        },
        {
          color: {
            name: "Baby Pink",
            clrCode: "#F3C0D1",
          },
          img: "https://i.ibb.co/JBZk7sS/headphone-3.png",
        },
        {
          color: {
            name: "Bluish Cyan",
            clrCode: "#64BFD1",
          },
          img: "https://i.ibb.co/SrPq3r0/headphone-4.png",
        },
      ],
      parent: "Headphones",
      children: "Bluetooth Headphones",
      price: 120,
      discount: 14,
      quantity: 12,
      brand: {
        name: "Logitech",
      },
      category: {
        name: "Headphones",
      },
      status: "in-stock",
      reviews: [
        {
          user: "/assets/img/users/user-3.jpg",
          review:
            "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
          date: "06 March, 2023",
          name: "John doe",
          email: "john@gmail.com",
          rating: 5,
        },
        {
          user: "/assets/img/users/user-2.jpg",
          review:
            "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
          date: "07 March, 2023",
          name: "Smith Doe",
          email: "smith@gmail.com",
          rating: 5,
        },
        {
          user: "/assets/img/users/user-3.jpg",
          review:
            "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
          date: "09 March, 2023",
          name: "Mark Smith",
          email: "mark@gmail.com",
          rating: 1,
        },
      ],
      productType: "electronics",
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
      additionalInformation: [
        {
          key: "Luces",
          value: "Luces RGB",
        },
        {
          key: "Status",
          value: "Inalambricos",
        },
        {
          key: "Screen Resolution",
          value: "1920 x 1200 Pixels",
        },
        {
          key: "Max Screen Resolution",
          value: "2000 x 1200",
        },
        {
          key: "Processor",
          value: "2.3 GHz (128 GB)",
        },
        {
          key: "Graphics Coprocessor",
          value: "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)",
        },
        {
          key: "Wireless Type",
          value: "802.11a/b/g/n/ac, Bluetooth",
        },
      ],
      featured: false,
      sellCount: 1,
      tags: ["Headphones", "Bluetooth "],
    },
    {
      isNew: true,
      bgColor: "#E3E3E3",
      id: "641e887d05f9ee1717e1348f",
      sku: "NVB7SDVX45",
      img: "https://i.ibb.co/n1YRvWJ/headphone-5.png",
      title: "Gaming Headphone",
      slug: "gaming-headphone",
      unit: "5pcs",
      imageURLs: [
        {
          color: {
            name: "Cyan",
            clrCode: "#03E2DD",
          },
          img: "https://i.ibb.co/n1YRvWJ/headphone-5.png",
        },
        {
          color: {
            name: "Dark Grey",
            clrCode: "#484848",
          },
          img: "https://i.ibb.co/WpkH1vq/headphone-6.png",
        },
        {
          color: {
            name: "Orange",
            clrCode: "#F17B3D",
          },
          img: "https://i.ibb.co/yRYbDCc/headphone-7.png",
        },
      ],
      parent: "Headphones",
      children: "Kids Headphones",
      price: 130,
      discount: 5,
      quantity: 10,
      brand: {
        name: "Sony",
      },
      category: {
        name: "Headphones",
      },
      status: "in-stock",
      reviews: [
        {
          user: "/assets/img/users/user-3.jpg",
          review:
            "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
          date: "06 March, 2023",
          name: "John doe",
          email: "john@gmail.com",
          rating: 5,
        },
        {
          user: "/assets/img/users/user-2.jpg",
          review:
            "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
          date: "07 March, 2023",
          name: "Smith Doe",
          email: "smith@gmail.com",
          rating: 5,
        },
      ],
      productType: "electronics",
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
      additionalInformation: [
        {
          key: "Standing screen display size",
          value: "Screen display Size 10.4",
        },
        {
          key: "Colors",
          value: "Cyan, Dark Grey, Orange",
        },
        {
          key: "Screen Resolution",
          value: "1920 x 1200 Pixels",
        },
        {
          key: "Max Screen Resolution",
          value: "2000 x 1200",
        },
        {
          key: "Processor",
          value: "2.3 GHz (128 GB)",
        },
        {
          key: "Graphics Coprocessor",
          value: "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)",
        },
        {
          key: "Wireless Type",
          value: "802.11a/b/g/n/ac, Bluetooth",
        },
      ],
      offerDate: {
        startDate: "2023-08-15T18:00:00.000Z",
        endDate: "2024-07-19T18:00:00.000Z",
      },
      featured: false,
      sellCount: 2,
      tags: ["Headphones", "Kids "],
    },
    {
      isNew: true,
      bgColor: "#E3E3E3",
      id: "641e887d05f9ee1717e13496",
      sku: "BVB7SDVX50",
      img: "https://i.ibb.co/5FPhGtq/headphone-8.png",
      title: "Headphone with Mic",
      slug: "headphone-with-mic",
      unit: "4pcs",
      imageURLs: [
        {
          color: {
            name: "Tealish Blue",
            clrCode: "#455D89",
          },
          img: "https://i.ibb.co/5FPhGtq/headphone-8.png",
        },
        {
          color: {
            name: "Silver",
            clrCode: "#ECECEC",
          },
          img: "https://i.ibb.co/vHP1TQf/headphone-9.png",
        },
        {
          color: {
            name: "Reddish Magenta",
            clrCode: "#DED3DB",
          },
          img: "https://i.ibb.co/3mdtrcm/headphone-10.png",
        },
      ],
      parent: "Headphones",
      children: "On-Ear Headphones",
      price: 110,
      discount: 0,
      quantity: 8,
      brand: {
        name: "Sony",
      },
      category: {
        name: "Headphones",
      },
      status: "out-of-stock",
      reviews: [
        {
          user: "/assets/img/users/user-3.jpg",
          review:
            "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
          date: "06 March, 2023",
          name: "John doe",
          email: "john@gmail.com",
          rating: 4,
        },
        {
          user: "/assets/img/users/user-2.jpg",
          review:
            "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
          date: "10 March, 2023",
          name: "John doe",
          email: "john@gmail.com",
          rating: 2,
        },
        {
          user: "/assets/img/users/user-3.jpg",
          review:
            "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
          date: "07 March, 2023",
          name: "Smith Doe",
          email: "smith@gmail.com",
          rating: 3.5,
        },
      ],
      productType: "electronics",
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
      additionalInformation: [
        {
          key: "Standing screen display size",
          value: "Screen display Size 10.4",
        },
        {
          key: "Colors",
          value: "Tealish Blue, Silver, Reddish Magenta",
        },
        {
          key: "Screen Resolution",
          value: "1920 x 1200 Pixels",
        },
        {
          key: "Max Screen Resolution",
          value: "2000 x 1200",
        },
        {
          key: "Processor",
          value: "2.3 GHz (128 GB)",
        },
        {
          key: "Graphics Coprocessor",
          value: "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)",
        },
        {
          key: "Wireless Type",
          value: "802.11a/b/g/n/ac, Bluetooth",
        },
      ],
      featured: true,
      sellCount: 0,
      tags: ["Headphones", "On-Ear"],
      videoId: "EW4ZYb3mCZk",
    },
  ]
}
