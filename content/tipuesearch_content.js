var tipuesearch = {"pages": [{'title': 'about', 'text': '陳冠宇的網站 \n 陳冠宇的倉儲 \n 黃翊銘的網站 \n 黃翊銘的倉儲 \n stage ag22 的網站 \n stage ag22 的倉儲 \n \n \n 產品主題 \n "多功能變型家具" \n 設計理念 \n 由於現在台灣地價飆漲，百姓的生活空間受到壓迫，為了最大限度的節省空間，我們才想說做一個可以變形並且方便收納的多功能變形家具 \n 我們最後選擇將椅子和桌子融合在一起，因為對於大學生來說要租到一間便宜，空間又大的房間，是可遇不可求的，魚和熊掌不可兼得的道理，基本上很難能兩全其美，所以既然空間不夠，那就將不必要的物品收起來，經過我們調查，很多時候我們其實只用的到一樣東西，不會同時需要使用，所以當今天有同學來家裡聊天就可以搬出我們設計的這款多功能變型家具，變成椅子讓客人坐，要是要做學術討論，將椅子變桌子一起討論，要是不用時又可以變成裝置藝術，簡直是一舉三得的好產品阿~~~(✿◕‿◕✿) \n \n 還不快來贊助我們!!! \n', 'tags': '', 'url': 'about.html'}, {'title': '分工', 'text': '網站經營 陳冠宇 \n 產品設計 黃翊銘 \n 技術總監 黃翊銘 \n 品質管理 陳冠宇', 'tags': '', 'url': '分工.html'}, {'title': 'w1', 'text': '討論產品定位 \n 建立個人及團隊網站 \n', 'tags': '', 'url': 'w1.html'}, {'title': '建立cmstemplate網站', 'text': '首先先到老師的網站下載 kmol2021_spring_v2.7z \n 內包含最新版本的 python3.9 \xa0最新版 \n \n 下載完後解壓縮 \n \n 得到 \n \n 將內文的.gitcofig拉到小白\xa0 並且打上[user] \n \n 再去到老師的github倉儲 mdecourse/cmstemplate 建立一新的倉儲 \n \n 建立好後去到setting將GitHub Pages的 Source\xa0 改成main 並儲存 \n \n 再去到小黑 打上下圖將其clone 下來 \n \n 即完成網站建構 \n', 'tags': '', 'url': '建立cmstemplate網站.html'}, {'title': '建立ssh', 'text': '首先將小黑編輯器打開並寫打上: \n \n 打上\xa0 \n ssh-keygen -t rsa -b 4096 -C "使用者學號" \n \n 第二行為鑰使儲存位置 \n 下一行為輸入密碼 \n 再次輸入密碼 \n 即可獲得要鑰使 \n 在鑰使儲存位置會找到兩個檔案(上為private key 下為 public key) \n \n (3) \n 下載putty工具 \n 會有以下檔案 \n \xa0 \n 利用puttygen.exe \n \n 打開後會發現下圖視窗 \n \n 按下load \n 將剛才的鑰使開啟 \n 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式 \n \xa0 \n 選擇所使用的鑰使 \n \n 得下圖 \n \xa0 \n \xa0 \n 以私人的形式儲存鑰使 \n \n (4) \n 在github 的settings中找到SSH and GPD keys \n \n 新增鑰使 \n 將id_rsa.pub的內容 \n \n 複製到 \n \n 並且創建一把鑰使 \n (5) \n 修改啟動的 start.bat 加入下列設定 \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n \n (6) \n home 下的 .ssh 目錄中多新增 config 並且內容如下 \n \xa0 \n # no proxy at home \n #ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p \n # set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup \n ProxyCommand y:/putty/plink.exe github.com %h %p \n \xa0\xa0\xa0 \n Host github.com \n \xa0\xa0\xa0\xa0User git \n \xa0\xa0\xa0\xa0Port 22 \n \xa0\xa0\xa0\xa0Hostname github.com \n \xa0\xa0\xa0\xa0\xa0\xa0 \n \xa0\xa0\xa0\xa0# for connect.exe need openssh key format \n \xa0\xa0\xa0\xa0#IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse" \n \xa0\xa0\xa0\xa0# for plink.exe need rsa key format but set under putty github.com session \n \xa0\xa0\xa0\xa0# plink.exe do not need the following setting \n \xa0\xa0\xa0\xa0#IdentityFile "y:\\home\\.ssh\\mdecourse_putty_private.ppk" \n \xa0\xa0\xa0 \n \xa0\xa0\xa0\xa0TCPKeepAlive yes \n \xa0\xa0\xa0\xa0IdentitiesOnly yes \n (7) \n cad2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線 \n \xa0 \n (8) \n 點擊putty.exe \n 設定代理主機 \n \n 建一個github.com並且save \n \xa0 \n 點擊proxy並設定 \n 設定代理主機(Proxy)\xa0(除非是IPV4 IPV6才要設定) \n \xa0 \n 設定Auth \n 設定SSH的\xa0ppk private key (之前轉的APK) \n \n 並且按下open後，就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push \n', 'tags': '', 'url': '建立ssh.html'}, {'title': 'w2', 'text': '討論細部結構', 'tags': '', 'url': 'w2.html'}, {'title': '製作過程', 'text': '第一次的產品設計。 \n 本次設計的理念最主要是以 實用 為主，其次為 可行性 。因此往傢俱的方向去構思 \n 似乎是個不錯的想法？ \n 最近看到摺疊傢俱豐富多變，設計一個具備兩種功能的傢俱，以實用性來說非常不錯。 \n 一開始用google meeting討論雛形，組員各自畫出自己的想法，將想法合併，探討其 \n 中是否存在衝突或是錯誤。 \n \n \n 我們的想法是:把一張椅子變形成桌子，藉由摺疊的方式，自由變換型態。 \n 中間遇到最大的問題是桌面的拼接方式以及中間的接合處間隙，我們從5種拼接方式中選擇 \n 最合適且最好設計的形狀(在第三周顯示)，再來設計尺寸。 \n', 'tags': '', 'url': '製作過程.html'}, {'title': 'w3', 'text': '成品最後測試及較驗', 'tags': '', 'url': 'w3.html'}, {'title': '應力分析', 'text': '', 'tags': '', 'url': '應力分析.html'}, {'title': '成品細節', 'text': '\n \n 上圖為本次設計結果!! \n \n 經過一周的討論以及想法結合，成品已擬定完成，接著就是建模與組立。 \n 總共有12個零件，以下為各零件之視圖: \n 第一件:支架中心 \n \n 第二件:連趕公件 \n \n 第三件:連桿母件 \n \n 第四件:接頭 \n \n 第五件:短銷 \n \n 第六件:長銷 \n \n 第七件:滑塊 \n \n 第八件:桌板 \n \n 第九件:桌板 \n \n 第十件:主樑 \n \n 第十一件:主樑 \n \n 第十二件:螺釘(ISO M2x5) \n \n 展開後的各個角度: \n \n \n \n 桌面的拼接方式: \n 從畫圈處看到，我們以錯開的方式接合 \n \n 支架合體&展開: \n 連桿座之間的角度30度和60度，從上視圖看 \n \n \n \n \n', 'tags': '', 'url': '成品細節.html'}, {'title': '成果', 'text': '這次我們的牛b產品不僅僅讓我們聊解到設計一項產品是多麼的不容易，也讓我們知道互相配合製作一項產品需要發揮各路人才的專長，經過日日夜夜的討論不一定有一個讓人滿意的結果，但在這時間內可以將產品定位做得如此完善也算是盡心盡力了，在這過程中也許有意見不合的地方，經過溝通與理解，不一定誰說的就一定是對的，將大家想到的想法接考慮進去，都是過程中不可或缺的一環 \n \n 這次我們的產品開發製作的是多功能家具，照福了全大學生房間空間不夠的問題 \n 合體動畫 \n \n \n \n \n 展開 \n \n \n \n 支架動畫', 'tags': '', 'url': '成果.html'}, {'title': '進度', 'text': '3月4日 \n 討論基礎外型及功能 \n 3/5第一次大改版 \n \n 3月10日雛形 \n \n 3月15號大討論 \n \n \n', 'tags': '', 'url': '進度.html'}]};