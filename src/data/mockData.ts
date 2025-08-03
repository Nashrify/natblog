import { BlogPost, Author } from '../types/blog';

export const mockAuthors: Author[] = [
  {
    id: '1',
    name: 'Amina Hassan',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Mwandishi mkuu wa teknolojia na msanifu wa programu. Ana uzoefu wa miaka 8 katika teknolojia ya habari.',
    email: 'amina@blog.co.tz',
    socialLinks: {
      twitter: '@aminahassan',
      facebook: 'aminahassan'
    }
  },
  {
    id: '2',
    name: 'Joseph Mwangi',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Mwandishi wa masuala ya utamaduni na kijamii. Anapenda kusoma na kuandika kuhusu historia ya Afrika.',
    email: 'joseph@blog.co.tz',
    socialLinks: {
      twitter: '@jmwangi',
      instagram: 'josephmwangi'
    }
  },
  {
    id: '3',
    name: 'Fatma Salim',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Mshauri wa afya na lishe. Ana shahada ya uzamili katika sayansi ya lishe kutoka Chuo Kikuu cha Dar es Salaam.',
    email: 'fatma@blog.co.tz',
    socialLinks: {
      facebook: 'fatmasalim',
      instagram: 'fatma_health'
    }
  }
];

export const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mstakabali wa Teknolojia ya Akili Bandia Afrika Mashariki',
    excerpt: 'Afrika Mashariki inaongoza katika ubunifu wa teknolojia ya akili bandia. Makala hii inaangalia fursa na changamoto zinazotutazama.',
    content: `
      <h2>Utangulizi</h2>
      <p>Teknolojia ya akili bandia (AI) imekuwa moja ya mada kuu za mjadala duniani kote. Afrika Mashariki, ikiwemo Tanzania, Kenya na Uganda, imekuwa ikijikita katika kuboresha uwepo wa teknolojia hii katika sekta mbalimbali.</p>
      
      <h2>Fursa za Kiuchumi</h2>
      <p>Teknolojia ya AI inatoa fursa kubwa za kiuchumi katika sekta za:</p>
      <ul>
        <li>Kilimo - kutumia data kuongeza mavuno</li>
        <li>Afya - kuongeza ufanisi wa huduma za kimatibabu</li>
        <li>Elimu - kuboresha njia za kujifunza</li>
        <li>Fedha - kuongeza usalama na ufanisi</li>
      </ul>

      <h2>Changamoto</h2>
      <p>Pamoja na fursa hizo, kuna changamoto ambazo zinahitaji kutatuliwa:</p>
      <ul>
        <li>Ukosefu wa ujuzi wa kitaaluma</li>
        <li>Miundombinu duni ya teknolojia</li>
        <li>Ukosefu wa fedha za uwekezaji</li>
        <li>Masuala ya faragha ya data</li>
      </ul>

      <h2>Hitimisho</h2>
      <p>Mstakabali wa AI Afrika Mashariki ni mkubwa, lakini unahitaji juhudi za pamoja kutoka kwa serikali, sekta binafsi na mashirika ya kimataifa.</p>
    `,
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[0],
    category: 'Teknolojia',
    tags: ['AI', 'Teknolojia', 'Afrika', 'Mstakabali'],
    publishedAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
    views: 1250,
    readTime: 5
  },
  {
    id: '2',
    title: 'Historia ya Utamaduni wa Kiswahili Pwani ya Afrika Mashariki',
    excerpt: 'Pwani ya Afrika Mashariki ina utamaduni mkuu wa Kiswahili uliojengwa kwa miaka mingi. Hebu tuangalie historia hii nzuri.',
    content: `
      <h2>Msingi wa Utamaduni wa Kiswahili</h2>
      <p>Utamaduni wa Kiswahili umejengwa kupitia mwingiliano wa makabila ya Kiafrika na wageni kutoka Asia na Ulaya kwa karne nyingi.</p>
      
      <h2>Utamaduni wa Kale</h2>
      <p>Kabla ya kuwasili kwa wageni, pwani ya Afrika Mashariki ilikuwa na jamii zilizoshirikiana katika uchumi, sanaa na imani.</p>

      <h2>Mwingiliano wa Kitamaduni</h2>
      <p>Kuja kwa Waarabu, Wahindi na baadaye Wazungu kulileta mabadiliko makubwa katika:</p>
      <ul>
        <li>Lugha - kuchanganyika kwa lugha za Kibantu na Kiarabu</li>
        <li>Dini - kuingilia kwa Uislamu na Ukristo</li>
        <li>Sanaa - kubadilika kwa mitindo ya ujenzi na sanaa</li>
        <li>Chakula - kuongezeka kwa aina za vyakula</li>
      </ul>

      <h2>Leo Hii</h2>
      <p>Utamaduni wa Kiswahili unaendelea kuwa hai na kubadilika, ukiunganisha asili yake na mazingira ya kisasa.</p>
    `,
    thumbnail: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[1],
    category: 'Utamaduni',
    tags: ['Historia', 'Utamaduni', 'Kiswahili', 'Afrika Mashariki'],
    publishedAt: '2025-01-14T15:30:00Z',
    updatedAt: '2025-01-14T15:30:00Z',
    views: 980,
    readTime: 7
  },
  {
    id: '3',
    title: 'Njia za Kudumisha Afya Nzuri Kwa Kutumia Vyakula vya Asili',
    excerpt: 'Vyakula vya asili vina faida nyingi kwa afya. Jifunze jinsi ya kutumia vyakula hivi kuongoza maisha yako.',
    content: `
      <h2>Umuhimu wa Vyakula vya Asili</h2>
      <p>Vyakula vya asili vinachangia sana katika kudumisha afya nzuri na kuzuia magonjwa mbalimbali.</p>
      
      <h2>Vyakula Muhimu vya Asili</h2>
      <ul>
        <li><strong>Mboga za majani</strong> - sukuma wiki, mchicha, kunde</li>
        <li><strong>Matunda ya asili</strong> - embe, nanasi, ndizi</li>
        <li><strong>Karanga na alizeti</strong> - chanzo cha protini</li>
        <li><strong>Maharage na kunde</strong> - vyakula vya ujenzi</li>
      </ul>

      <h2>Faida za Kiafya</h2>
      <p>Vyakula vya asili vinasaidia:</p>
      <ul>
        <li>Kuongeza nguvu za mwili</li>
        <li>Kuzuia magonjwa ya moyo</li>
        <li>Kuboresha utendaji wa tumbo</li>
        <li>Kudumisha uzito sahihi</li>
      </ul>

      <h2>Jinsi ya Kuandaa</h2>
      <p>Ili kupata faida kamili, vyakula vya asili vinapaswa kuandaliwa kwa njia sahihi:</p>
      <ul>
        <li>Tumia mbinu za kupika zenye hewa kidogo</li>
        <li>Epuka kuongeza viungo vingi vya bandia</li>
        <li>Kula vyakula vya aina mbalimbali</li>
      </ul>
    `,
    thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[2],
    category: 'Afya',
    tags: ['Afya', 'Lishe', 'Vyakula Asili', 'Maisha'],
    publishedAt: '2025-01-13T09:15:00Z',
    updatedAt: '2025-01-13T09:15:00Z',
    views: 1580,
    readTime: 6
  },
  {
    id: '4',
    title: 'Maendeleo ya Kijamii katika Mijini ya Afrika Mashariki',
    excerpt: 'Miji ya Afrika Mashariki inapitia mabadiliko makubwa ya kijamii. Tuangalie changamoto na suluhisho.',
    content: `
      <h2>Utangulizi</h2>
      <p>Miji ya Afrika Mashariki kama Dar es Salaam, Nairobi na Kampala inapitia mabadiliko makubwa ya kijamii na kiuchumi.</p>
      
      <h2>Changamoto za Mijini</h2>
      <ul>
        <li>Ukuaji wa kasi wa idadi ya watu</li>
        <li>Ukosefu wa makazi ya bei nafuu</li>
        <li>Miundombinu duni ya barabara na usafiri</li>
        <li>Mazingira ya kazi yasiyotosha</li>
      </ul>

      <h2>Masulubisho</h2>
      <p>Serikali na wadau wengine wamechukua hatua mbalimbali:</p>
      <ul>
        <li>Ujenzi wa nyumba za bei nafuu</li>
        <li>Kuboresha miundombinu ya usafiri</li>
        <li>Kuanzisha miradi ya kijamii</li>
        <li>Kuboresha huduma za elimu na afya</li>
      </ul>
    `,
    thumbnail: 'https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[1],
    category: 'Kijamii',
    tags: ['Miji', 'Maendeleo', 'Kijamii', 'Afrika Mashariki'],
    publishedAt: '2025-01-12T14:20:00Z',
    updatedAt: '2025-01-12T14:20:00Z',
    views: 750,
    readTime: 4
  },
  {
    id: '5',
    title: 'Jinsi ya Kuanza Biashara Ndogo ya Kidigitali Tanzania',
    excerpt: 'Biashara za kidigitali zinazidi kuongezeka Tanzania. Jifunze hatua za kuanza biashara yako ya mtandaoni.',
    content: `
      <h2>Mazingira ya Biashara za Kidigitali</h2>
      <p>Tanzania ina mazingira mazuri ya kukuza biashara za kidigitali kutokana na kuongezeka kwa matumizi ya mtandao.</p>
      
      <h2>Hatua za Kuanza</h2>
      <ol>
        <li>Bainisha bidhaa au huduma yako</li>
        <li>Jifunze kutumia mitandao ya kijamii</li>
        <li>Tengeneza tovuti rahisi</li>
        <li>Anza uuzaji mtandaoni</li>
        <li>Jifunze kuhusu utangazaji wa kidigitali</li>
      </ol>

      <h2>Zana Muhimu</h2>
      <ul>
        <li>WhatsApp Business</li>
        <li>Facebook na Instagram</li>
        <li>Tovuti rahisi</li>
        <li>Mfumo wa malipo ya kidigitali</li>
      </ul>
    `,
    thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[0],
    category: 'Biashara',
    tags: ['Biashara', 'Kidigitali', 'Uongozaji', 'Tanzania'],
    publishedAt: '2025-01-11T11:45:00Z',
    updatedAt: '2025-01-11T11:45:00Z',
    views: 2100,
    readTime: 8
  }
];