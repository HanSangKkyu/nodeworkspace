var data1 = [
    ["NIS 호스트 관련 정보가 저장된 파일","hosts.byname"],
    ["부팅 시 필요한 서비스를 이 스크립트 안에 등록\n","/etc/rc.d/rc.local\n"],
    ["DNS 관련해서 bind 뜻은?\n","Bind : Berkeley Internet Name Domain, 설정이 쉬우면서도 표준을 따른다.\n"],
    ["웹페이지 인증을 위해 아파지 사용자를 만드는 과정에서 사용되는 명령어는?\n","htpasswd -c /usr/local/httpd/conf/passwd"],
    ["xinetd에서 생성하는 관련 데몬의 최대 개수를 제한 없음으로 지정하려고 한다. 어떤 항목을 수정해야 할까?\n","instances = Unlimited\n"],
    ["메일 서버가 사용하는 호스트를 등록하는 파일\n vi (괄호) \n ihd.or.kr \n kait.or.kr","/etc/mail/local-host-names"],
    ["rsyslog로 생성되는 로그파일의 생성 위치는?\n","/var/log\n"],
    ["NTP에서 날짜 및 시간을 맞추기 위해서 원격지 NTP를 이용하는 명령어","ntpdate"],
    ["VNC서버에서 해상도를 변경하는 파일로 알맞은 것은? VNC 설정 파일의 경로는?\n","/etc/sysconfig/vncservers\n"],
    ["시스템 초기화와 관련된 내용이 설정되어있는 파일의 경로는?\n","/etc/init/rcS.conf (/etc/rc.d/rc.sysinit 실행)\n"],
    ["\n시스템 하드웨어 정보 출력 명령어\n","\nlspci\n"],
    ["서버의 커널 변수를 제어하여 TCP 연결 상태를 3시간동안 유지하도록 변경하려고 한다. 명령어는?\n","echo 10800 > /proc/sys/net/ip4/tcp_keepalive_time\n"],
    ["파일을 백업하는 명령어 cpio 사용법","find /home | cpio -ocv > home.backup (/home아래에 있는 모든 파일들을 home.backup으로 백업하겠다.)"],
    ["아파치 소스 파일이 정상적으로 다운로드 되었는지 검증해 보려고 한다. 이 때 사용하는 명령어는?\n","md5sum ~\n"],
    ["DHCP 서버의 환경설정 파일 dhcpd.conf에서 게이트웨이 주소를 192.168.5.1로 변경하려고 한다. 명령어는?\n","option router 192.168.5.1;\n"],
    ["NIS 사용자 계정 관련 정보가 저장된 파일","passwd.byname"],
    ["NIS 사용자 계정 관련 정보 출력 명령어","ypcat passwd.byname"],
    ["모듈의 의존성을 편집해주는 명령어는?\n","depmod\n"],
    ["iptables의 테이블 중 넷필터의 연결 추적 시스템과 독립적으로 동작해야 하는 규칙을 설정하는 테이블은?\n","raw\n"],
    ["스왑파일을 만드는 명령어는? 블럭사이즈 1k, 총 1GB 만들기 \n","dd if=/dev/zero of=/swap-file bs=1k count=1024000\n"],
    ["ifconfig를 이용해서 ip를 변경하면 재시작시 모든 정보가 날아간다. 어떤 파일을 수정해야 재시작 후에도 변경된 ip가 유지 될까?\n","/etc/sysconfig/network-scripts/ifcfg-eth0\n"],
    ["/etc/fstab 설정법 중 NFS 등록 법은?\nNFS IP : 192.168.5.13\nNFS 공유 디렉터리명 : /nfsdata\nNFS 클라이언트에서 마운트할 디렉터리명 : /ndata\n","192.168.5.13:/nfsdata /ndata nfs\n"],
    ["X윈도 기반의 프린터 설정 도구를 실행하는 명령은?\n","system-config-priter\n"],
    ["smb.conf에서 특정 호스트 대역을 허용하고 싶을 때 사용하는 명령어는?\n","hosts.allow = 192.168.0.\n"],
    ["iptables 명령의 '-j LOG' 옵션을 통해서 특정 호스트에 대한 로그를 기록하도록 정책을 설정하였다. 관련 로그가 기록되는 파일은?\n","/var/log/messages\n"],
    ["리눅스 시스템에 설정된 게이트웨이의 주소 값을 확인할 수 있는 명령어는?\n","ip, route, netstat\n"],
    ["현재 로그인한 사용자 정보 로그, 명령어","/var/run/utmp (w, who, finger)"],
    ["squid.conf 파일에서 어떤 항목을 이용해서 접근제어를 할까?\n","acl\n"],
    ["/etc/fstab 설정 방법\n","파일 시스템을 영구적으로 마운트 하기 위해 설정하는 곳이다. \n/dev/sdb1 /home2 ext4 defaults 1 1\n"],
    ["usermod 옵션에 대한 뜻은? -u, -g, -G, -c, -d, -e, -f, -s\n","-u : 사용자 계정의 UID 생성 \n-g : 사용자 계정의 1차 그룹의 GID 지정 \n-G : 사용자 계정의 2차 그룹의 GID 지정 \n-c : Comment \n-d : 사용자의 홈디렉토리를 지정 \n-e : 사용자의 계정 만기일 지정 \n-f : 사용자의 계정 유효일 지정 \n-s : 로그인 시 사용할 기본 쉘 지정 \n"],
    ["모듈간 의존성을 기록한 파일","/lib/modules/커널버전/modules.dep"],
    ["프록시 서버 squid.conf 파일에서 포트를 8080으로 설정하려고 한다. 명령어는?\n","http_port 8080\n"],
    ["squid.conf 파일에서 괄호는?\n(괄호) ufs /var/spool/squid 100 16 256\n","cache_dir\n"],
    ["ihduser가 실행하고 있는 모든 프로세스를 종료시키는 명령어는?\n","pkill -9 -u ihduser\n"],
    ["사운드 카드 제어 명령어는?\n","alsactl"],
    ["FTP서버 구성 후 /etc/hosts.allow와 /etc/hosts.deny 파일을 이용한 접근제어를 설정하려고 한다. vsftpd.conf파일에 수정되어야할항목은?\n","tcp_wrappers\n"],
    ["NIS 클라이언트에서 사용하는 명령어 NIS 서버의 이름과 관련 맵파일을 출력","ypwhich"],
    ["vsftpd.conf에서 TCP wrappers를 이용한 접근 제어가 가능하도록 지정하는 설정은?\n","tcp_wrappers=YES\n"],
    ["사용자/그룹 생성, 삭제, 로그인 등 사용자 인증에 대한 정보 기록 ssh, telnet, su실행 로그, xinetd 인증 로그파일","/var/log/secure "],
    ["사용자의 디스크 쿼터를 설정하는 명령어는?\n","edquota\n"],
    ["로그아웃한 후에도 백그라운드에서 작업을 계속 실행하도록 하는 명령어","nohub"],
    ["ihduser라는 사용자가 cron작업을 등록하면 생성되는 파일은?\n","/var/spool/cron/ihduser\n"],
    ["dhcpd.conf파일의 일부에 괄호는?\noption (괄호) ns1.ihd.or.kr;\n","domain-name-server\n"],
    ["사용자의 만기일을 설정하는 명령어는?\n","usermod -e {만기일} {사용자명}\n"],
    ["디렉터리 서비스 프로토콜이다. 네트워크상에 파일이나 장치를 찾을 수 있게 해준다.","LDAP"],
    ["DHCP서버를 구성해 클라이언트에 192.168.0.2 부터 192.168.0.254까지 IP를 할당하려고 한다. 어떤 파일을 어떻게 수정해야 할까?\n","dhcpd.conf, range 192.168.0.2 192.168.0.254;\n"],
    ["vsfptd.conf에서 익명 사용자의 접근을 허용하기 위한 설정법은?\n","anonymous_enable=YES\n"],
    ["커널의 모듈간의 의존성이 저장된 파일 경로\n","\n/lib/modules/커널버전.dep\n"],
    ["ssh접속할 때 비밀번호 없이 접속할 수 있게 설정하는 명령어\n","scp ./ssh/id_rsa.pub ihd.or.kr:./ssh/authorized_keys\n"],
    ["\n사용자 인증 모듈 PAM 구성요소 설명 account, auth, session, required\n","\naccount - 접근이 허용되는지, 만료된 계정인지 판별\nauth - 생체인증 같은 다른 인증을 통해 사용자 판별\nsession - 인증 전후 과정\nrequired - 구성요소 아님 통제 담당하는 부분임\n"],
    ["하나의 메일서버에 여러개의 메일 도메인을 사용하려면 가상메일 주소를 만들어야 한다. 그 과정은?\n","~ vi /etc/mail/virtusertable\nwebmaster@linusjack.com linus // .com으로 들어오면 linus에게 전달\nwebmaster@linusjack.net jack // .net으로 들어오면 jack에게 전달\n그 후 해시테이블로 변경해야 한다.\n~ makemap hash /etc/mail/virtusertable < /etc/mail/virtusertable\n"],
    ["사용자 생성시 기본적으로 제공되는 파일이나 디렉터리를 확인할 수 있는 경로는?\n","/etc/skel\n"],
    ["VNC와 관련있는 프로토콜은?\n","RFB(remote frame buffer)\n"],
    ["시스템의 특정한 파일의 변화를 모니터링하고 알림을 해주는 유용한 보안 그리고 무결성 도구\n","Tripwire\n"],
    ["다음 처럼 입력해서 192.168.7.4 ssh 접근을 막을려고 한다. 어떤 파일에 입력해야 하는가? \n sshd:  192.168.7.4","/etc/hosts.deny\n"],
    ["도메인을 ihd.or.kr로 강제 적용할 때 설정하는 sendmail.cf 파일의 내용은?\n","Djihd.or.kr\n"],
    ["\n/etc/aliases의 정보를 읽어 들여 관련 DB 정보를 업데이트 하는 명령어\n","\nsendmail -bi"],
    ["usermod -L ihduser와 같은 기능을 구현하는 방법은?\n","/etc/shadow 두번째 필드에 !를 덧붙여서 로그인을 막는다. (-L lock)\n"],
    ["GRUB(부트로더)의 패스워드를 설정하는 명령어","password -md5"],
    ["IPP 포트 번호는?\n","631\n"],
    ["아파치에서 개인 홈페이지를 운영하기 위해서 관련 파일과 항목명을 알려 달라고 했다.","httpd-userdir.conf, UserDir"],
    ["사용자 계정을 임시적으로 휴먼계정으로 만들거나 잠그는 명령어는?\n","usermod -L {username}\n passwd -l 사용자명\n"],
    ["시스템 초기화와 관련된 내용이 설정되어있는 파일의 경로는?\n","/etc/init/rcS.conf (/etc/rc.d/rc.sysinit 실행)\n"],
    ["부팅 시 각 레벨별로 진행되는 내용이 설정된 파일의 경로는?\n","/etc/init/rc.conf (/etc/rc.d/rc{0~6}.d 실행)\n"],
    ["vsftpd.conf에서 익명의 사용자도 업로드가 가능하도록 지정하는 설정은?\n","anon_upload_enable=YES\n"],
    ["FTP 로그 파일","/var/log/Xferlog "],
    ["ftp 서비스에서 다수의 리모트 파일을 수신한다, 다수의 로컬파일을 전송한다, 다수의 파일을 삭제한다 명령어는?\n","mget - 다수의 리모트 파일을 수신한다.\nmput - 다수의 로컬파일을 전송한다.\nmdelete - 다수의 파일을 삭제한다.\n"],
    ["NFS 설정 중, 전체 파일 시스템이 내보내진 경우에 이 옵션을 선택하면 하부구조 검사를 하지 않음으로서 전송률을 높일 수 있다. 이 옵션값은?\n","no_subtree_check"],
    ["삼바 서비스 사용자를 설정하는 파일 경로\n","/etc/samba/smbusers\n"],
    ["X윈도 기반의 프린터 설정 도구를 실행하는 명령은?\n","system-config-priter\n"],
    ["zone파일의 문법적 오류를 검사하는 명령\n","named-checkzone\n"],
    ["유저명을 joon에서 lin으로 바꾸는 명령어는?\n","usermod -l iln joon\n"],
    ["tcp wrapper 이용해서 telnet을 막을려고 한다. vi /etc/hsots.deny 이후 입력할 명령어는?\n","in.telnetd : 192.168.5.13\n"],
    ["사용자 쿼터를 이용하기 위해 /etc/fstab 파일에 등록하는 설정 값으로 알맞은 것은?\n","aquota.user\n"],
    ["\nmodprobe 옵션 중 모듈을 제거할 때 사용하는 옵션으로 의존성이 있는 모듈들을 찾아서 사용되지 않는다면 자동으로 제거 옵션\n","\nmodprobe -r\n"],
    ["\netc/group 파일 해석하는 법\nihduser:x:500:kaituser,user1\n","\n그룹명 : 그룹패스워드 : 그룹GID : 사용자아이디, 보조그룹만명시\n그룹명: ihduser\n그룹패스워드: x\n그룹GID: 500\n사용자아이디: kaituser\n보조그룹명: user1\nkaituser라는 사용자가 ihduser그룹의 보조 그룹 user1으로 속해있는 상황이다.\n"],
    ["NIS 관련 맵 파일이 위치하는 디렉터리","/var/yp"],
    ["ihduser:x:501:\n위 형식의 내용을 가지고 있는 파일은?\n","/etc/group\n"],
    ["모듈 정보를 출력하는 명령어\n","modinfo {모듈명}"],
    ["응용계층\n전송계층\n네트워크계층\n데이터링크계층\n물리계층\n데이터 종류는?\n","\n응용 - 데이터\n전송 - 세그먼트\n네트워크-패킷\n데이터링크-프레임\n물리-비트\n"],
    ["아파치 웹 서버의 다중처리모듈 관련 정보를 확인하는 명령은?\n","httpd -l\n"],
    ["squid.conf 파일에서 어떤 항목을 이용해서 접근제어를 할까?\n","acl\n"],
    ["로컬변수 조회, 글로별 변수 조회, 글로벌 변수 설정하는 명령어는?\n","set, env, export\n"],
    ["DNS(Domain Name Server)서버에서 Zone 파일 정의를 위한 SOA레코드 항목은?\n","Serial, Refresh, Retry, Expire, Minimum\n"],
    ["\n커널 컴파일 도움말 명령어\n","\nmake help"],
    ["iptables에서 INPUT 사슬에 설정된 두 번째 정책을 제거 하는 명령은?\n","iptables -D INPUT 2\n"],
    ["웹페이지 인증을 위해 아파지 사용자를 만드는 과정에서 사용되는 명령어는?\n","htpasswd -c /usr/local/httpd/conf/passwd"],
    ["X클라이언트를 이용하기 위한 설정하는 명령어와 파일은?\n","xauth Xauthority\n"],
    ["x윈도 x서버 연결에 사용되는 권한 부여 정보 값 편집/출력 명령어","xauth"],
    ["특정 ID로 들어오는 메일을 여러호스트에게 전달할 때 사용하는 파일\n사용자가 다른 메일 계정을 사용할 수 있도록 할 수 있다.","/etc/aliases"],
    ["가상머신 대상으로 cpu 자원 모니터링 명령어","virt-top"],
    ["quota파일 생성,수정,확인하기 위해서 파일시스템을 검사하는 명령어","quotacheck"],
    ["tar -c -v (괄호) '1 jan 2019' -f backup.tar /backup 차등 백업 하려고 한다.\n","-N 차등백업\n"],
    ["rpm과 yum의 패키지 삭제 명령어","rpm -e, yum remove"],
    ["그룹의 관리자를 설정할 때 사용하는 명령어는?\n","gpasswd\n"],
    ["리눅스 배포판 출시 순서\n","SLS - Slackware, Debian - SUSE, RedHat - CentOS - Ubuntu\n"],
    ["최근 입력한 명령어 5개만 출력하고 싶을 때 명령어는?\n","history 5\n"],
    ["부팅과 관련된 실행 레벨이 정의되어 있는 파일 경로는?\n","/etc/inittab\n"],
    ["반가상화 기법을 사용하는 제품은?\n","Xen, VirtualBox, Visual Server\n"],
    ["renice 사용법?\n", "renice {바꿀값} {pid}\n"],
    ["다른 그룹에 속해 있는 파일을 쓰기 권한이 가능하도록 하는 명령어","파일 엑세스 컨트롤 리스트 setfactl, getfactl 리스트 목록 출력"],
    ["특정 폴더를 이용해서 다른 폴더로 이동하고 싶을 때 사용하는 명령어는?\n","ln -s {다른 폴더 경로} {특정 폴더 경로}\n"],
    ["MDA의 종류","procmail, spamassassin"],
    [" INPUT 사슬에 대한 기본정책을 거부로 설정하는 명령은?\n"," iptables -P INPUT DROP\n"],
    ["NIS 호스트 관련 정보가 저장된 파일","hosts.byname"],
               
]

var data2 = [
    ["부팅과 관련된 실행 레벨이 정의되어 있는 파일 경로는?\n","/etc/inittab\n"],
    ["사용자의 만기일을 설정하는 명령어는?\n","usermod -e {만기일} {사용자명}\n"],
    ["메일 서버가 사용하는 호스트를 등록하는 파일\n vi (괄호) \n ihd.or.kr \n kait.or.kr","/etc/mail/local-host-names"],
    ["/etc/fstab 설정 방법\n","파일 시스템을 영구적으로 마운트 하기 위해 설정하는 곳이다. \n/dev/sdb1 /home2 ext4 defaults 1 1\n"],
    ["dhcpd.conf파일의 일부에 괄호는?\noption (괄호) ns1.ihd.or.kr;\n","domain-name-server\n"],
    ["ifconfig를 이용해서 ip를 변경하면 재시작시 모든 정보가 날아간다. 어떤 파일을 수정해야 재시작 후에도 변경된 ip가 유지 될까?\n","/etc/sysconfig/network-scripts/ifcfg-eth0\n"],
    ["iptables 명령의 '-j LOG' 옵션을 통해서 특정 호스트에 대한 로그를 기록하도록 정책을 설정하였다. 관련 로그가 기록되는 파일은?\n","/var/log/messages\n"],
    ["아파치에서 개인 홈페이지를 운영하기 위해서 관련 파일과 항목명을 알려 달라고 했다.","httpd-userdir.conf, UserDir"],
    ["squid.conf 파일에서 괄호는?\n(괄호) ufs /var/spool/squid 100 16 256\n","cache_dir\n"],
    ["ssh접속할 때 비밀번호 없이 접속할 수 있게 설정하는 명령어\n","scp ./ssh/id_rsa.pub ihd.or.kr:./ssh/authorized_keys\n"],
    ["시스템의 특정한 파일의 변화를 모니터링하고 알림을 해주는 유용한 보안 그리고 무결성 도구\n","Tripwire\n"],
    ["특정 ID로 들어오는 메일을 여러호스트에게 전달할 때 사용하는 파일\n사용자가 다른 메일 계정을 사용할 수 있도록 할 수 있다.","/etc/aliases"],
    ["하나의 메일서버에 여러개의 메일 도메인을 사용하려면 가상메일 주소를 만들어야 한다. 그 과정은?\n","~ vi /etc/mail/virtusertable\nwebmaster@linusjack.com linus // .com으로 들어오면 linus에게 전달\nwebmaster@linusjack.net jack // .net으로 들어오면 jack에게 전달\n그 후 해시테이블로 변경해야 한다.\n~ makemap hash /etc/mail/virtusertable < /etc/mail/virtusertable\n"],
    ["GRUB(부트로더)의 패스워드를 설정하는 명령어","password -md5"],
    ["사용자 쿼터를 이용하기 위해 /etc/fstab 파일에 등록하는 설정 값으로 알맞은 것은?\n","aquota.user\n"],
    ["모듈 정보를 출력하는 명령어\n","modinfo {모듈명}"],
    ["NIS 클라이언트에서 사용하는 명령어 NIS 서버의 이름과 관련 맵파일을 출력","ypwhich"],
    ["NIS 관련 맵 파일이 위치하는 디렉터리","/var/yp"],
    ["X윈도 기반의 프린터 설정 도구를 실행하는 명령은?\n","system-config-priter\n"],
    ["\n시스템 하드웨어 정보 출력 명령어\n","\nlspci\n"],
    ["삼바 서비스 사용자를 설정하는 파일 경로\n","/etc/samba/smbusers\n"],
    ["smb.conf에서 특정 호스트 대역을 허용하고 싶을 때 사용하는 명령어는?\n","hosts.allow = 192.168.0.\n"],
    ["FTP 로그 파일","/var/log/Xferlog "],
    ["아파치 웹 서버의 다중처리모듈 관련 정보를 확인하는 명령은?\n","httpd -l\n"],
    ["아파치 소스 파일이 정상적으로 다운로드 되었는지 검증해 보려고 한다. 이 때 사용하는 명령어는?\n","md5sum ~\n"],
    
]

var data3 = [
    ["ifconfig를 이용해서 ip를 변경하면 재시작시 모든 정보가 날아간다. 어떤 파일을 수정해야 재시작 후에도 변경된 ip가 유지 될까?\n","/etc/sysconfig/network-scripts/ifcfg-eth0\n"],
    ["사용자의 만기일을 설정하는 명령어는?\n","usermod -e {만기일} {사용자명}\n"],
    ["메일 서버가 사용하는 호스트를 등록하는 파일\n vi (괄호) \n ihd.or.kr \n kait.or.kr","/etc/mail/local-host-names"],
]