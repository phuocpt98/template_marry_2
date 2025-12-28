
import React from 'react';
import { Heart, Calendar, MapPin, Music, Camera, MessageCircle } from 'lucide-react';
import { StoryEvent, GalleryImage } from './types';

export const WEDDING_DATE = "2025-12-25T18:00:00";
export const BRIDE_NAME = "Nguyễn Phương Lan";
export const GROOM_NAME = "Trần Hoàng Minh";

export const LOVE_STORY: StoryEvent[] = [
  {
    year: "2020",
    title: "Lần đầu gặp gỡ",
    description: "Chúng mình gặp nhau lần đầu tại một quán cafe nhỏ vào một chiều mưa Hà Nội. Ánh mắt chạm nhau, và thế là...",
    image: "https://picsum.photos/seed/meet/800/600"
  },
  {
    year: "2021",
    title: "Lời tỏ tình ngọt ngào",
    description: "Dưới ánh đèn lung linh của cầu Long Biên, Minh đã lấy hết can đảm để nói lời yêu. Lan đã mỉm cười đồng ý.",
    image: "https://picsum.photos/seed/love/800/600"
  },
  {
    year: "2023",
    title: "Chuyến đi xa đầu tiên",
    description: "Cùng nhau ngắm hoàng hôn tại Đà Lạt. Khoảnh khắc ấy chúng mình biết rằng không thể thiếu nhau trong đời.",
    image: "https://picsum.photos/seed/travel/800/600"
  },
  {
    year: "2024",
    title: "Lời cầu hôn",
    description: "Minh đã tạo một bất ngờ lớn trước sự chứng kiến của gia đình và bạn bè. Một chiếc nhẫn, một lời hứa trọn đời.",
    image: "https://picsum.photos/seed/propose/800/600"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: "https://picsum.photos/seed/w1/1000/1200", caption: "Khoảnh khắc hạnh phúc" },
  { url: "https://picsum.photos/seed/w2/1200/800", caption: "Nụ cười rạng rỡ" },
  { url: "https://picsum.photos/seed/w3/800/1000", caption: "Bên nhau trọn đời" },
  { url: "https://picsum.photos/seed/w4/1000/1000", caption: "Tình yêu vĩnh cửu" },
  { url: "https://picsum.photos/seed/w5/1200/900", caption: "Ngày chung đôi" },
  { url: "https://picsum.photos/seed/w6/900/1200", caption: "Hành trình mới" },
];

export const ICONS = {
  Heart: <Heart className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Music: <Music className="w-6 h-6" />,
  Camera: <Camera className="w-6 h-6" />,
  MessageCircle: <MessageCircle className="w-6 h-6" />
};
