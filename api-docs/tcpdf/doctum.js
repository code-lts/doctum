

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '<ul><li data-name="namespace:" class="opened"><div style="padding-left:0px" class="hd"><span class="icon icon-play"></span><a href="[Global_Namespace].html">[Global Namespace]</a></div><div class="bd"><ul><li data-name="class:TCPDF" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF.html">TCPDF</a></div></li><li data-name="class:TCPDF2DBarcode" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF2DBarcode.html">TCPDF2DBarcode</a></div></li><li data-name="class:TCPDFBarcode" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDFBarcode.html">TCPDFBarcode</a></div></li><li data-name="class:TCPDF_COLORS" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF_COLORS.html">TCPDF_COLORS</a></div></li><li data-name="class:TCPDF_FILTERS" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF_FILTERS.html">TCPDF_FILTERS</a></div></li><li data-name="class:TCPDF_FONTS" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF_FONTS.html">TCPDF_FONTS</a></div></li><li data-name="class:TCPDF_FONT_DATA" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF_FONT_DATA.html">TCPDF_FONT_DATA</a></div></li><li data-name="class:TCPDF_IMAGES" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF_IMAGES.html">TCPDF_IMAGES</a></div></li><li data-name="class:TCPDF_IMPORT" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF_IMPORT.html">TCPDF_IMPORT</a></div></li><li data-name="class:TCPDF_PARSER" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF_PARSER.html">TCPDF_PARSER</a></div></li><li data-name="class:TCPDF_STATIC" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="TCPDF_STATIC.html">TCPDF_STATIC</a></div></li></ul></div></li></ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                        {"type":"Namespace","link":"[Global_Namespace].html","name":"","doc":"Namespace "},                            {"type":"Class","link":"TCPDF.html","name":"TCPDF","doc":""},
                                {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method___construct","name":"TCPDF::__construct","doc":"<p>This is the class constructor.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method___destruct","name":"TCPDF::__destruct","doc":"<p>Default destructor.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageUnit","name":"TCPDF::setPageUnit","doc":"<p>Set the units of measure for the document.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageFormat","name":"TCPDF::setPageFormat","doc":"<p>Change the format of the current page</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageOrientation","name":"TCPDF::setPageOrientation","doc":"<p>Set page orientation.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setSpacesRE","name":"TCPDF::setSpacesRE","doc":"<p>Set regular expression to detect withespaces or word separators.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setRTL","name":"TCPDF::setRTL","doc":"<p>Enable or disable Right-To-Left language mode</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getRTL","name":"TCPDF::getRTL","doc":"<p>Return the RTL status</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setTempRTL","name":"TCPDF::setTempRTL","doc":"<p>Force temporary RTL language direction</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_isRTLTextDir","name":"TCPDF::isRTLTextDir","doc":"<p>Return the current temporary RTL status</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setLastH","name":"TCPDF::setLastH","doc":"<p>Set the last cell height.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCellHeight","name":"TCPDF::getCellHeight","doc":"<p>Return the cell height</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_resetLastH","name":"TCPDF::resetLastH","doc":"<p>Reset the last cell height.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getLastH","name":"TCPDF::getLastH","doc":"<p>Get the last cell height.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setImageScale","name":"TCPDF::setImageScale","doc":"<p>Set the adjusting factor to convert pixels to user units.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getImageScale","name":"TCPDF::getImageScale","doc":"<p>Returns the adjusting factor to convert pixels to user units.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageDimensions","name":"TCPDF::getPageDimensions","doc":"<p>Returns an array of page dimensions:</p>\n<ul><li>$this->pagedim[$this->page]['w'] = page width in points</li><li>$this->pagedim[$this->page]['h'] = height in points</li><li>$this->pagedim[$this->page]['wk'] = page width in user units</li><li>$this->pagedim[$this->page]['hk'] = page height in user units</li><li>$this->pagedim[$this->page]['tm'] = top margin</li><li>$this->pagedim[$this->page]['bm'] = bottom margin</li><li>$this->pagedim[$this->page]['lm'] = left margin</li><li>$this->pagedim[$this->page]['rm'] = right margin</li><li>$this->pagedim[$this->page]['pb'] = auto page break</li><li>$this->pagedim[$this->page]['or'] = page orientation</li><li>$this->pagedim[$this->page]['olm'] = original left margin</li><li>$this->pagedim[$this->page]['orm'] = original right margin</li><li>$this->pagedim[$this->page]['Rotate'] = The number of degrees by which the page shall be rotated clockwise when displayed or printed. The value shall be a multiple of 90.</li><li>$this->pagedim[$this->page]['PZ'] = The page's preferred zoom (magnification) factor.</li><li>$this->pagedim[$this->page]['trans'] : the style and duration of the visual transition to use when moving from another page to the given page during a presentation<ul><li>$this->pagedim[$this->page]['trans']['Dur'] = The page's display duration (also called its advance timing): the maximum length of time, in seconds, that the page shall be displayed during presentations before the viewer application shall automatically advance to the next page.</li><li>$this->pagedim[$this->page]['trans']['S'] = transition style : Split, Blinds, Box, Wipe, Dissolve, Glitter, R, Fly, Push, Cover, Uncover, Fade</li><li>$this->pagedim[$this->page]['trans']['D'] = The duration of the transition effect, in seconds.</li><li>$this->pagedim[$this->page]['trans']['Dm'] = (Split and Blinds transition styles only) The dimension in which the specified transition effect shall occur: H = Horizontal, V = Vertical. Default value: H.</li><li>$this->pagedim[$this->page]['trans']['M'] = (Split, Box and Fly transition styles only) The direction of motion for the specified transition effect: I = Inward from the edges of the page, O = Outward from the center of the pageDefault value: I.</li><li>$this->pagedim[$this->page]['trans']['Di'] = (Wipe, Glitter, Fly, Cover, Uncover and Push transition styles only) The direction in which the specified transition effect shall moves, expressed in degrees counterclockwise starting from a left-to-right direction. If the value is a number, it shall be one of: 0 = Left to right, 90 = Bottom to top (Wipe only), 180 = Right to left (Wipe only), 270 = Top to bottom, 315 = Top-left to bottom-right (Glitter only). If the value is a name, it shall be None, which is relevant only for the Fly transition when the value of SS is not 1.0. Default value: 0.</li><li>$this->pagedim[$this->page]['trans']['SS'] = (Fly transition style only) The starting or ending scale at which the changes shall be drawn. If M specifies an inward transition, the scale of the changes drawn shall progress from SS to 1.0 over the course of the transition. If M specifies an outward transition, the scale of the changes drawn shall progress from 1.0 to SS over the course of the transition. Default: 1.0. </li><li>$this->pagedim[$this->page]['trans']['B'] = (Fly transition style only) If true, the area that shall be flown in is rectangular and opaque. Default: false.</li></ul></li><li>$this->pagedim[$this->page]['MediaBox'] : the boundaries of the physical medium on which the page shall be displayed or printed<ul><li>$this->pagedim[$this->page]['MediaBox']['llx'] = lower-left x coordinate in points</li><li>$this->pagedim[$this->page]['MediaBox']['lly'] = lower-left y coordinate in points</li><li>$this->pagedim[$this->page]['MediaBox']['urx'] = upper-right x coordinate in points</li><li>$this->pagedim[$this->page]['MediaBox']['ury'] = upper-right y coordinate in points</li></ul></li><li>$this->pagedim[$this->page]['CropBox'] : the visible region of default user space<ul><li>$this->pagedim[$this->page]['CropBox']['llx'] = lower-left x coordinate in points</li><li>$this->pagedim[$this->page]['CropBox']['lly'] = lower-left y coordinate in points</li><li>$this->pagedim[$this->page]['CropBox']['urx'] = upper-right x coordinate in points</li><li>$this->pagedim[$this->page]['CropBox']['ury'] = upper-right y coordinate in points</li></ul></li><li>$this->pagedim[$this->page]['BleedBox'] : the region to which the contents of the page shall be clipped when output in a production environment<ul><li>$this->pagedim[$this->page]['BleedBox']['llx'] = lower-left x coordinate in points</li><li>$this->pagedim[$this->page]['BleedBox']['lly'] = lower-left y coordinate in points</li><li>$this->pagedim[$this->page]['BleedBox']['urx'] = upper-right x coordinate in points</li><li>$this->pagedim[$this->page]['BleedBox']['ury'] = upper-right y coordinate in points</li></ul></li><li>$this->pagedim[$this->page]['TrimBox'] : the intended dimensions of the finished page after trimming<ul><li>$this->pagedim[$this->page]['TrimBox']['llx'] = lower-left x coordinate in points</li><li>$this->pagedim[$this->page]['TrimBox']['lly'] = lower-left y coordinate in points</li><li>$this->pagedim[$this->page]['TrimBox']['urx'] = upper-right x coordinate in points</li><li>$this->pagedim[$this->page]['TrimBox']['ury'] = upper-right y coordinate in points</li></ul></li><li>$this->pagedim[$this->page]['ArtBox'] : the extent of the page's meaningful content<ul><li>$this->pagedim[$this->page]['ArtBox']['llx'] = lower-left x coordinate in points</li><li>$this->pagedim[$this->page]['ArtBox']['lly'] = lower-left y coordinate in points</li><li>$this->pagedim[$this->page]['ArtBox']['urx'] = upper-right x coordinate in points</li><li>$this->pagedim[$this->page]['ArtBox']['ury'] = upper-right y coordinate in points</li></ul></li></ul>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageWidth","name":"TCPDF::getPageWidth","doc":"<p>Returns the page width in units.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageHeight","name":"TCPDF::getPageHeight","doc":"<p>Returns the page height in units.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getBreakMargin","name":"TCPDF::getBreakMargin","doc":"<p>Returns the page break margin.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getScaleFactor","name":"TCPDF::getScaleFactor","doc":"<p>Returns the scale factor (number of points in user unit).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetMargins","name":"TCPDF::SetMargins","doc":"<p>Defines the left, top and right margins.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetLeftMargin","name":"TCPDF::SetLeftMargin","doc":"<p>Defines the left margin. The method can be called before creating the first page. If the current abscissa gets out of page, it is brought back to the margin.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetTopMargin","name":"TCPDF::SetTopMargin","doc":"<p>Defines the top margin. The method can be called before creating the first page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetRightMargin","name":"TCPDF::SetRightMargin","doc":"<p>Defines the right margin. The method can be called before creating the first page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetCellPadding","name":"TCPDF::SetCellPadding","doc":"<p>Set the same internal Cell padding for top, right, bottom, left-</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setCellPaddings","name":"TCPDF::setCellPaddings","doc":"<p>Set the internal Cell paddings.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCellPaddings","name":"TCPDF::getCellPaddings","doc":"<p>Get the internal Cell padding array.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setCellMargins","name":"TCPDF::setCellMargins","doc":"<p>Set the internal Cell margins.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCellMargins","name":"TCPDF::getCellMargins","doc":"<p>Get the internal Cell margin array.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_adjustCellPadding","name":"TCPDF::adjustCellPadding","doc":"<p>Adjust the internal Cell padding array to take account of the line width.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetAutoPageBreak","name":"TCPDF::SetAutoPageBreak","doc":"<p>Enables or disables the automatic page breaking mode. When enabling, the second parameter is the distance from the bottom of the page that defines the triggering limit. By default, the mode is on and the margin is 2 cm.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAutoPageBreak","name":"TCPDF::getAutoPageBreak","doc":"<p>Return the auto-page-break mode (true or false).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetDisplayMode","name":"TCPDF::SetDisplayMode","doc":"<p>Defines the way the document is to be displayed by the viewer.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetCompression","name":"TCPDF::SetCompression","doc":"<p>Activates or deactivates page compression. When activated, the internal representation of each page is compressed, which leads to a compression ratio of about 2 for the resulting document. Compression is on by default.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setSRGBmode","name":"TCPDF::setSRGBmode","doc":"<p>Set flag to force sRGB_IEC61966-2.1 black scaled ICC color profile for the whole document.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetDocInfoUnicode","name":"TCPDF::SetDocInfoUnicode","doc":"<p>Turn on/off Unicode mode for document information dictionary (meta tags).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetTitle","name":"TCPDF::SetTitle","doc":"<p>Defines the title of the document.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetSubject","name":"TCPDF::SetSubject","doc":"<p>Defines the subject of the document.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetAuthor","name":"TCPDF::SetAuthor","doc":"<p>Defines the author of the document.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetKeywords","name":"TCPDF::SetKeywords","doc":"<p>Associates keywords with the document, generally in the form 'keyword1 keyword2 ...'.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetCreator","name":"TCPDF::SetCreator","doc":"<p>Defines the creator of the document. This is typically the name of the application that generates the PDF.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetAllowLocalFiles","name":"TCPDF::SetAllowLocalFiles","doc":"<p>Whether to allow local file path in image html tags, when prefixed with file://</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Error","name":"TCPDF::Error","doc":"<p>Throw an exception or print an error message and die if the K_TCPDF_PARSER_THROW_EXCEPTION_ERROR constant is set to true.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Open","name":"TCPDF::Open","doc":"<p>This method begins the generation of the PDF document.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Close","name":"TCPDF::Close","doc":"<p>Terminates the PDF document.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPage","name":"TCPDF::setPage","doc":"<p>Move pointer at the specified document page and update page dimensions.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_lastPage","name":"TCPDF::lastPage","doc":"<p>Reset pointer to the last document page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPage","name":"TCPDF::getPage","doc":"<p>Get current document page number.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getNumPages","name":"TCPDF::getNumPages","doc":"<p>Get the total number of insered pages.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addTOCPage","name":"TCPDF::addTOCPage","doc":"<p>Adds a new TOC (Table Of Content) page to the document.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_endTOCPage","name":"TCPDF::endTOCPage","doc":"<p>Terminate the current TOC (Table Of Content) page</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_AddPage","name":"TCPDF::AddPage","doc":"<p>Adds a new page to the document. If a page is already present, the Footer() method is called first to output the footer (if enabled). Then the page is added, the current position set to the top-left corner according to the left and top margins (or top-right if in RTL mode), and Header() is called to display the header (if enabled).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_endPage","name":"TCPDF::endPage","doc":"<p>Terminate the current page</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_startPage","name":"TCPDF::startPage","doc":"<p>Starts a new page to the document. The page must be closed using the endPage() function.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageMark","name":"TCPDF::setPageMark","doc":"<p>Set start-writing mark on current page stream used to put borders and fills.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setContentMark","name":"TCPDF::setContentMark","doc":"<p>Set start-writing mark on selected page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHeaderData","name":"TCPDF::setHeaderData","doc":"<p>Set header data.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFooterData","name":"TCPDF::setFooterData","doc":"<p>Set footer data.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHeaderData","name":"TCPDF::getHeaderData","doc":"<p>Returns header data:</p>\n<ul><li>$ret['logo'] = logo image</li><li>$ret['logo_width'] = width of the image logo in user units</li><li>$ret['title'] = header title</li><li>$ret['string'] = header description string</li></ul>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHeaderMargin","name":"TCPDF::setHeaderMargin","doc":"<p>Set header margin.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHeaderMargin","name":"TCPDF::getHeaderMargin","doc":"<p>Returns header margin in user units.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFooterMargin","name":"TCPDF::setFooterMargin","doc":"<p>Set footer margin.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFooterMargin","name":"TCPDF::getFooterMargin","doc":"<p>Returns footer margin in user units.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPrintHeader","name":"TCPDF::setPrintHeader","doc":"<p>Set a flag to print page header.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPrintFooter","name":"TCPDF::setPrintFooter","doc":"<p>Set a flag to print page footer.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getImageRBX","name":"TCPDF::getImageRBX","doc":"<p>Return the right-bottom (or left-bottom for RTL) corner X coordinate of last inserted image</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getImageRBY","name":"TCPDF::getImageRBY","doc":"<p>Return the right-bottom (or left-bottom for RTL) corner Y coordinate of last inserted image</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_resetHeaderTemplate","name":"TCPDF::resetHeaderTemplate","doc":"<p>Reset the xobject template used by Header() method.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHeaderTemplateAutoreset","name":"TCPDF::setHeaderTemplateAutoreset","doc":"<p>Set a flag to automatically reset the xobject template used by Header() method at each page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Header","name":"TCPDF::Header","doc":"<p>This method is used to render the page header.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Footer","name":"TCPDF::Footer","doc":"<p>This method is used to render the page footer.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHeader","name":"TCPDF::setHeader","doc":"<p>This method is used to render the page header.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFooter","name":"TCPDF::setFooter","doc":"<p>This method is used to render the page footer.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_inPageBody","name":"TCPDF::inPageBody","doc":"<p>Check if we are on the page body (excluding page header and footer).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setTableHeader","name":"TCPDF::setTableHeader","doc":"<p>This method is used to render the table header on new page (if any).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_PageNo","name":"TCPDF::PageNo","doc":"<p>Returns the current page number.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAllSpotColors","name":"TCPDF::getAllSpotColors","doc":"<p>Returns the array of spot colors.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_AddSpotColor","name":"TCPDF::AddSpotColor","doc":"<p>Defines a new spot color.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setSpotColor","name":"TCPDF::setSpotColor","doc":"<p>Set the spot color for the specified type ('draw', 'fill', 'text').</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetDrawSpotColor","name":"TCPDF::SetDrawSpotColor","doc":"<p>Defines the spot color used for all drawing operations (lines, rectangles and cell borders).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetFillSpotColor","name":"TCPDF::SetFillSpotColor","doc":"<p>Defines the spot color used for all filling operations (filled rectangles and cell backgrounds).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetTextSpotColor","name":"TCPDF::SetTextSpotColor","doc":"<p>Defines the spot color used for text.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setColorArray","name":"TCPDF::setColorArray","doc":"<p>Set the color array for the specified type ('draw', 'fill', 'text').</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetDrawColorArray","name":"TCPDF::SetDrawColorArray","doc":"<p>Defines the color used for all drawing operations (lines, rectangles and cell borders).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetFillColorArray","name":"TCPDF::SetFillColorArray","doc":"<p>Defines the color used for all filling operations (filled rectangles and cell backgrounds).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetTextColorArray","name":"TCPDF::SetTextColorArray","doc":"<p>Defines the color used for text. It can be expressed in RGB components or gray scale.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setColor","name":"TCPDF::setColor","doc":"<p>Defines the color used by the specified type ('draw', 'fill', 'text').</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetDrawColor","name":"TCPDF::SetDrawColor","doc":"<p>Defines the color used for all drawing operations (lines, rectangles and cell borders). It can be expressed in RGB components or gray scale. The method can be called before the first page is created and the value is retained from page to page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetFillColor","name":"TCPDF::SetFillColor","doc":"<p>Defines the color used for all filling operations (filled rectangles and cell backgrounds). It can be expressed in RGB components or gray scale. The method can be called before the first page is created and the value is retained from page to page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetTextColor","name":"TCPDF::SetTextColor","doc":"<p>Defines the color used for text. It can be expressed in RGB components or gray scale. The method can be called before the first page is created and the value is retained from page to page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetStringWidth","name":"TCPDF::GetStringWidth","doc":"<p>Returns the length of a string in user unit. A font must be selected.<br></p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetArrStringWidth","name":"TCPDF::GetArrStringWidth","doc":"<p>Returns the string length of an array of chars in user unit or an array of characters widths. A font must be selected.<br></p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetCharWidth","name":"TCPDF::GetCharWidth","doc":"<p>Returns the length of the char in user unit for the current font considering current stretching and spacing (tracking).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getRawCharWidth","name":"TCPDF::getRawCharWidth","doc":"<p>Returns the length of the char in user unit for the current font.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetNumChars","name":"TCPDF::GetNumChars","doc":"<p>Returns the numbero of characters in a string.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontsList","name":"TCPDF::getFontsList","doc":"<p>Fill the list of available fonts ($this-&gt;fontlist).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_AddFont","name":"TCPDF::AddFont","doc":"<p>Imports a TrueType, Type1, core, or CID0 font and makes it available.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetFont","name":"TCPDF::SetFont","doc":"<p>Sets the font used to print character strings.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetFontSize","name":"TCPDF::SetFontSize","doc":"<p>Defines the size of the current font.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontBBox","name":"TCPDF::getFontBBox","doc":"<p>Returns the bounding box of the current font in user units.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAbsFontMeasure","name":"TCPDF::getAbsFontMeasure","doc":"<p>Convert a relative font measure into absolute value.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCharBBox","name":"TCPDF::getCharBBox","doc":"<p>Returns the glyph bounding box of the specified character in the current font in user units.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontDescent","name":"TCPDF::getFontDescent","doc":"<p>Return the font descent value</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontAscent","name":"TCPDF::getFontAscent","doc":"<p>Return the font ascent value.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_isCharDefined","name":"TCPDF::isCharDefined","doc":"<p>Return true in the character is present in the specified font.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_replaceMissingChars","name":"TCPDF::replaceMissingChars","doc":"<p>Replace missing font characters on selected font with specified substitutions.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetDefaultMonospacedFont","name":"TCPDF::SetDefaultMonospacedFont","doc":"<p>Defines the default monospaced font.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_AddLink","name":"TCPDF::AddLink","doc":"<p>Creates a new internal link and returns its identifier. An internal link is a clickable area which directs to another place within the document.<br />\nThe identifier can then be passed to Cell(), Write(), Image() or Link(). The destination is defined with SetLink().</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetLink","name":"TCPDF::SetLink","doc":"<p>Defines the page and position a link points to.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Link","name":"TCPDF::Link","doc":"<p>Puts a link on a rectangular area of the page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Annotation","name":"TCPDF::Annotation","doc":"<p>Puts a markup annotation on a rectangular area of the page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putEmbeddedFiles","name":"TCPDF::_putEmbeddedFiles","doc":"<p>Embedd the attached files.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Text","name":"TCPDF::Text","doc":"<p>Prints a text cell at the specified position.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_AcceptPageBreak","name":"TCPDF::AcceptPageBreak","doc":"<p>Whenever a page break condition is met, the method is called, and the break is issued or not depending on the returned value.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_checkPageBreak","name":"TCPDF::checkPageBreak","doc":"<p>Add page if needed.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Cell","name":"TCPDF::Cell","doc":"<p>Prints a cell (rectangular area) with optional borders, background color and character string. The upper-left corner of the cell corresponds to the current position. The text can be aligned or centered. After the call, the current position moves to the right or to the next line. It is possible to put a link on the text.<br />\nIf automatic page breaking is enabled and the cell goes beyond the limit, a page break is done before outputting.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCellCode","name":"TCPDF::getCellCode","doc":"<p>Returns the PDF string code to print a cell (rectangular area) with optional borders, background color and character string. The upper-left corner of the cell corresponds to the current position. The text can be aligned or centered. After the call, the current position moves to the right or to the next line. It is possible to put a link on the text.<br />\nIf automatic page breaking is enabled and the cell goes beyond the limit, a page break is done before outputting.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_replaceChar","name":"TCPDF::replaceChar","doc":"<p>Replace a char if is defined on the current font.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCellBorder","name":"TCPDF::getCellBorder","doc":"<p>Returns the code to draw the cell border</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_MultiCell","name":"TCPDF::MultiCell","doc":"<p>This method allows printing text with line breaks.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getNumLines","name":"TCPDF::getNumLines","doc":"<p>This method return the estimated number of lines for print a simple text string using Multicell() method.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getStringHeight","name":"TCPDF::getStringHeight","doc":"<p>This method return the estimated height needed for printing a simple text string using the Multicell() method.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Write","name":"TCPDF::Write","doc":"<p>This method prints text from the current position.<br /></p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getRemainingWidth","name":"TCPDF::getRemainingWidth","doc":"<p>Returns the remaining width between the current position and margins.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_fitBlock","name":"TCPDF::fitBlock","doc":"<p>Set the block dimensions accounting for page breaks and page/column fitting</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Image","name":"TCPDF::Image","doc":"<p>Puts an image in the page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ImagePngAlpha","name":"TCPDF::ImagePngAlpha","doc":"<p>Extract info from a PNG image with alpha channel using the Imagick or GD library.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getGDgamma","name":"TCPDF::getGDgamma","doc":"<p>Get the GD-corrected PNG gamma value from alpha color</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Ln","name":"TCPDF::Ln","doc":"<p>Performs a line break.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetX","name":"TCPDF::GetX","doc":"<p>Returns the relative X value of current position.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetAbsX","name":"TCPDF::GetAbsX","doc":"<p>Returns the absolute X value of current position.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetY","name":"TCPDF::GetY","doc":"<p>Returns the ordinate of the current position.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetX","name":"TCPDF::SetX","doc":"<p>Defines the abscissa of the current position.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetY","name":"TCPDF::SetY","doc":"<p>Moves the current abscissa back to the left margin and sets the ordinate.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetXY","name":"TCPDF::SetXY","doc":"<p>Defines the abscissa and ordinate of the current position.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetAbsX","name":"TCPDF::SetAbsX","doc":"<p>Set the absolute X coordinate of the current pointer.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetAbsY","name":"TCPDF::SetAbsY","doc":"<p>Set the absolute Y coordinate of the current pointer.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetAbsXY","name":"TCPDF::SetAbsXY","doc":"<p>Set the absolute X and Y coordinates of the current pointer.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Output","name":"TCPDF::Output","doc":"<p>Send the document to a given destination: string, local file or browser.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__destroy","name":"TCPDF::_destroy","doc":"<p>Unset all class variables except the following critical variables.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dochecks","name":"TCPDF::_dochecks","doc":"<p>Check for locale-related bug</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getInternalPageNumberAliases","name":"TCPDF::getInternalPageNumberAliases","doc":"<p>Return an array containing variations for the basic page number alias.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAllInternalPageNumberAliases","name":"TCPDF::getAllInternalPageNumberAliases","doc":"<p>Return an array containing all internal page aliases.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_replaceRightShiftPageNumAliases","name":"TCPDF::replaceRightShiftPageNumAliases","doc":"<p>Replace right shift page number aliases with spaces to correct right alignment.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageBoxTypes","name":"TCPDF::setPageBoxTypes","doc":"<p>Set page boxes to be included on page descriptions.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putpages","name":"TCPDF::_putpages","doc":"<p>Output pages (and replace page number aliases).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__getannotsrefs","name":"TCPDF::_getannotsrefs","doc":"<p>Get references to page annotations.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putannotsobjs","name":"TCPDF::_putannotsobjs","doc":"<p>Output annotations objects for all pages.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putAPXObject","name":"TCPDF::_putAPXObject","doc":"<p>Put appearance streams XObject used to define annotation's appearance states.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putfonts","name":"TCPDF::_putfonts","doc":"<p>Output fonts.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__puttruetypeunicode","name":"TCPDF::_puttruetypeunicode","doc":"<p>Adds unicode fonts.<br>\nBased on PDF Reference 1.3 (section 5)</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putcidfont0","name":"TCPDF::_putcidfont0","doc":"<p>Output CID-0 fonts.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putimages","name":"TCPDF::_putimages","doc":"<p>Output images.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putxobjects","name":"TCPDF::_putxobjects","doc":"<p>Output Form XObjects Templates.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putspotcolors","name":"TCPDF::_putspotcolors","doc":"<p>Output Spot Colors Resources.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__getxobjectdict","name":"TCPDF::_getxobjectdict","doc":"<p>Return XObjects Dictionary.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putresourcedict","name":"TCPDF::_putresourcedict","doc":"<p>Output Resources Dictionary.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putresources","name":"TCPDF::_putresources","doc":"<p>Output Resources.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putinfo","name":"TCPDF::_putinfo","doc":"<p>Adds some Metadata information (Document Information Dictionary)\n(see Chapter 14.3.3 Document Information Dictionary of PDF32000_2008.pdf Reference)</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setExtraXMP","name":"TCPDF::setExtraXMP","doc":"<p>Set additional XMP data to be added on the default XMP data just before the end of &quot;x:xmpmeta&quot; tag.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setExtraXMPRDF","name":"TCPDF::setExtraXMPRDF","doc":"<p>Set additional XMP data to be added on the default XMP data just before the end of &quot;rdf:RDF&quot; tag.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putXMP","name":"TCPDF::_putXMP","doc":"<p>Put XMP data object and return ID.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putcatalog","name":"TCPDF::_putcatalog","doc":"<p>Output Catalog.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putviewerpreferences","name":"TCPDF::_putviewerpreferences","doc":"<p>Output viewer preferences.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putheader","name":"TCPDF::_putheader","doc":"<p>Output PDF File Header (7.5.2).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__enddoc","name":"TCPDF::_enddoc","doc":"<p>Output end of document (EOF).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__beginpage","name":"TCPDF::_beginpage","doc":"<p>Initialize a new page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__endpage","name":"TCPDF::_endpage","doc":"<p>Mark end of page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__newobj","name":"TCPDF::_newobj","doc":"<p>Begin a new object and return the object number.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__getobj","name":"TCPDF::_getobj","doc":"<p>Return the starting object string for the selected object ID.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dounderline","name":"TCPDF::_dounderline","doc":"<p>Underline text.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dounderlinew","name":"TCPDF::_dounderlinew","doc":"<p>Underline for rectangular text area.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dolinethrough","name":"TCPDF::_dolinethrough","doc":"<p>Line through text.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dolinethroughw","name":"TCPDF::_dolinethroughw","doc":"<p>Line through for rectangular text area.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dooverline","name":"TCPDF::_dooverline","doc":"<p>Overline text.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__dooverlinew","name":"TCPDF::_dooverlinew","doc":"<p>Overline for rectangular text area.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__datastring","name":"TCPDF::_datastring","doc":"<p>Format a data string for meta information</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setDocCreationTimestamp","name":"TCPDF::setDocCreationTimestamp","doc":"<p>Set the document creation timestamp</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setDocModificationTimestamp","name":"TCPDF::setDocModificationTimestamp","doc":"<p>Set the document modification timestamp</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getDocCreationTimestamp","name":"TCPDF::getDocCreationTimestamp","doc":"<p>Returns document creation timestamp in seconds.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getDocModificationTimestamp","name":"TCPDF::getDocModificationTimestamp","doc":"<p>Returns document modification timestamp in seconds.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__datestring","name":"TCPDF::_datestring","doc":"<p>Returns a formatted date for meta information</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__textstring","name":"TCPDF::_textstring","doc":"<p>Format a text string for meta information</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__getrawstream","name":"TCPDF::_getrawstream","doc":"<p>get raw output stream.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__out","name":"TCPDF::_out","doc":"<p>Output a string to the document.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHeaderFont","name":"TCPDF::setHeaderFont","doc":"<p>Set header font.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHeaderFont","name":"TCPDF::getHeaderFont","doc":"<p>Get header font.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFooterFont","name":"TCPDF::setFooterFont","doc":"<p>Set footer font.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFooterFont","name":"TCPDF::getFooterFont","doc":"<p>Get Footer font.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setLanguageArray","name":"TCPDF::setLanguageArray","doc":"<p>Set language array.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPDFData","name":"TCPDF::getPDFData","doc":"<p>Returns the PDF data.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addHtmlLink","name":"TCPDF::addHtmlLink","doc":"<p>Output anchor link.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_pixelsToUnits","name":"TCPDF::pixelsToUnits","doc":"<p>Converts pixels to User's Units.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_unhtmlentities","name":"TCPDF::unhtmlentities","doc":"<p>Reverse function for htmlentities.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__objectkey","name":"TCPDF::_objectkey","doc":"<p>Compute encryption key depending on object number where the encrypted data is stored.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__encrypt_data","name":"TCPDF::_encrypt_data","doc":"<p>Encrypt the input string.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putencryption","name":"TCPDF::_putencryption","doc":"<p>Put encryption on PDF document.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__Uvalue","name":"TCPDF::_Uvalue","doc":"<p>Compute U value (used for encryption)</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__UEvalue","name":"TCPDF::_UEvalue","doc":"<p>Compute UE value (used for encryption)</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__Ovalue","name":"TCPDF::_Ovalue","doc":"<p>Compute O value (used for encryption)</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__OEvalue","name":"TCPDF::_OEvalue","doc":"<p>Compute OE value (used for encryption)</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__fixAES256Password","name":"TCPDF::_fixAES256Password","doc":"<p>Convert password for AES-256 encryption mode</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__generateencryptionkey","name":"TCPDF::_generateencryptionkey","doc":"<p>Compute encryption key</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetProtection","name":"TCPDF::SetProtection","doc":"<p>Set document protection\nRemark: the protection against modification is for people who have the full Acrobat product.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_StartTransform","name":"TCPDF::StartTransform","doc":"<p>Starts a 2D tranformation saving current graphic state.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_StopTransform","name":"TCPDF::StopTransform","doc":"<p>Stops a 2D tranformation restoring previous graphic state.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ScaleX","name":"TCPDF::ScaleX","doc":"<p>Horizontal Scaling.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ScaleY","name":"TCPDF::ScaleY","doc":"<p>Vertical Scaling.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ScaleXY","name":"TCPDF::ScaleXY","doc":"<p>Vertical and horizontal proportional Scaling.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Scale","name":"TCPDF::Scale","doc":"<p>Vertical and horizontal non-proportional Scaling.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_MirrorH","name":"TCPDF::MirrorH","doc":"<p>Horizontal Mirroring.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_MirrorV","name":"TCPDF::MirrorV","doc":"<p>Verical Mirroring.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_MirrorP","name":"TCPDF::MirrorP","doc":"<p>Point reflection mirroring.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_MirrorL","name":"TCPDF::MirrorL","doc":"<p>Reflection against a straight line through point (x, y) with the gradient angle (angle).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_TranslateX","name":"TCPDF::TranslateX","doc":"<p>Translate graphic object horizontally.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_TranslateY","name":"TCPDF::TranslateY","doc":"<p>Translate graphic object vertically.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Translate","name":"TCPDF::Translate","doc":"<p>Translate graphic object horizontally and vertically.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Rotate","name":"TCPDF::Rotate","doc":"<p>Rotate object.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SkewX","name":"TCPDF::SkewX","doc":"<p>Skew horizontally.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SkewY","name":"TCPDF::SkewY","doc":"<p>Skew vertically.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Skew","name":"TCPDF::Skew","doc":"<p>Skew.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Transform","name":"TCPDF::Transform","doc":"<p>Apply graphic transformations.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetLineWidth","name":"TCPDF::SetLineWidth","doc":"<p>Defines the line width. By default, the value equals 0.2 mm. The method can be called before the first page is created and the value is retained from page to page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_GetLineWidth","name":"TCPDF::GetLineWidth","doc":"<p>Returns the current the line width.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetLineStyle","name":"TCPDF::SetLineStyle","doc":"<p>Set line style.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outPoint","name":"TCPDF::_outPoint","doc":"<p>Begin a new subpath by moving the current point to coordinates (x, y), omitting any connecting line segment.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outLine","name":"TCPDF::_outLine","doc":"<p>Append a straight line segment from the current point to the point (x, y).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outRect","name":"TCPDF::_outRect","doc":"<p>Append a rectangle to the current path as a complete subpath, with lower-left corner (x, y) and dimensions widthand height in user space.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outCurve","name":"TCPDF::_outCurve","doc":"<p>Append a cubic Bezier curve to the current path. The curve shall extend from the current point to the point (x3, y3), using (x1, y1) and (x2, y2) as the Bezier control points.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outCurveV","name":"TCPDF::_outCurveV","doc":"<p>Append a cubic Bezier curve to the current path. The curve shall extend from the current point to the point (x3, y3), using the current point and (x2, y2) as the Bezier control points.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outCurveY","name":"TCPDF::_outCurveY","doc":"<p>Append a cubic Bezier curve to the current path. The curve shall extend from the current point to the point (x3, y3), using (x1, y1) and (x3, y3) as the Bezier control points.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Line","name":"TCPDF::Line","doc":"<p>Draws a line between two points.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Rect","name":"TCPDF::Rect","doc":"<p>Draws a rectangle.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Curve","name":"TCPDF::Curve","doc":"<p>Draws a Bezier curve.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Polycurve","name":"TCPDF::Polycurve","doc":"<p>Draws a poly-Bezier curve.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Ellipse","name":"TCPDF::Ellipse","doc":"<p>Draws an ellipse.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outellipticalarc","name":"TCPDF::_outellipticalarc","doc":"<p>Append an elliptical arc to the current path.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Circle","name":"TCPDF::Circle","doc":"<p>Draws a circle.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_PolyLine","name":"TCPDF::PolyLine","doc":"<p>Draws a polygonal line</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Polygon","name":"TCPDF::Polygon","doc":"<p>Draws a polygon.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_RegularPolygon","name":"TCPDF::RegularPolygon","doc":"<p>Draws a regular polygon.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_StarPolygon","name":"TCPDF::StarPolygon","doc":"<p>Draws a star polygon</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_RoundedRect","name":"TCPDF::RoundedRect","doc":"<p>Draws a rounded rectangle.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_RoundedRectXY","name":"TCPDF::RoundedRectXY","doc":"<p>Draws a rounded rectangle.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Arrow","name":"TCPDF::Arrow","doc":"<p>Draws a grahic arrow.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setDestination","name":"TCPDF::setDestination","doc":"<p>Add a Named Destination.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getDestination","name":"TCPDF::getDestination","doc":"<p>Return the Named Destination array.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putdests","name":"TCPDF::_putdests","doc":"<p>Insert Named Destinations.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setBookmark","name":"TCPDF::setBookmark","doc":"<p>Adds a bookmark - alias for Bookmark().</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Bookmark","name":"TCPDF::Bookmark","doc":"<p>Adds a bookmark.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_sortBookmarks","name":"TCPDF::sortBookmarks","doc":"<p>Sort bookmarks for page and key.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putbookmarks","name":"TCPDF::_putbookmarks","doc":"<p>Create a bookmark PDF string.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_IncludeJS","name":"TCPDF::IncludeJS","doc":"<p>Adds a javascript</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addJavascriptObject","name":"TCPDF::addJavascriptObject","doc":"<p>Adds a javascript object and return object ID</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putjavascript","name":"TCPDF::_putjavascript","doc":"<p>Create a javascript PDF string.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__addfield","name":"TCPDF::_addfield","doc":"<p>Adds a javascript form field.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFormDefaultProp","name":"TCPDF::setFormDefaultProp","doc":"<p>Set default properties for form fields.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFormDefaultProp","name":"TCPDF::getFormDefaultProp","doc":"<p>Return the default properties for form fields.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_TextField","name":"TCPDF::TextField","doc":"<p>Creates a text field</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_RadioButton","name":"TCPDF::RadioButton","doc":"<p>Creates a RadioButton field.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ListBox","name":"TCPDF::ListBox","doc":"<p>Creates a List-box field</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ComboBox","name":"TCPDF::ComboBox","doc":"<p>Creates a Combo-box field</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_CheckBox","name":"TCPDF::CheckBox","doc":"<p>Creates a CheckBox field</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Button","name":"TCPDF::Button","doc":"<p>Creates a button field</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putsignature","name":"TCPDF::_putsignature","doc":"<p>Add certification signature (DocMDP or UR3)\nYou can set only one signature type</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setUserRights","name":"TCPDF::setUserRights","doc":"<p>Set User's Rights for PDF Reader\nWARNING: This is experimental and currently do not work.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setSignature","name":"TCPDF::setSignature","doc":"<p>Enable document signature (requires the OpenSSL Library).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setSignatureAppearance","name":"TCPDF::setSignatureAppearance","doc":"<p>Set the digital signature appearance (a cliccable rectangle area to get signature properties)</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addEmptySignatureAppearance","name":"TCPDF::addEmptySignatureAppearance","doc":"<p>Add an empty digital signature appearance (a cliccable rectangle area to get signature properties)</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getSignatureAppearanceArray","name":"TCPDF::getSignatureAppearanceArray","doc":"<p>Get the array that defines the signature appearance (page and rectangle coordinates).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setTimeStamp","name":"TCPDF::setTimeStamp","doc":"<p>Enable document timestamping (requires the OpenSSL Library).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_applyTSA","name":"TCPDF::applyTSA","doc":"<p>NOT YET IMPLEMENTED\nRequest TSA for a timestamp</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_startPageGroup","name":"TCPDF::startPageGroup","doc":"<p>Create a new page group.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setStartingPageNumber","name":"TCPDF::setStartingPageNumber","doc":"<p>Set the starting page number.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAliasRightShift","name":"TCPDF::getAliasRightShift","doc":"<p>Returns the string alias used right align page numbers.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAliasNbPages","name":"TCPDF::getAliasNbPages","doc":"<p>Returns the string alias used for the total number of pages.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAliasNumPage","name":"TCPDF::getAliasNumPage","doc":"<p>Returns the string alias used for the page number.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageGroupAlias","name":"TCPDF::getPageGroupAlias","doc":"<p>Return the alias for the total number of pages in the current page group.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageNumGroupAlias","name":"TCPDF::getPageNumGroupAlias","doc":"<p>Return the alias for the page number on the current page group.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getGroupPageNo","name":"TCPDF::getGroupPageNo","doc":"<p>Return the current page in the group.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getGroupPageNoFormatted","name":"TCPDF::getGroupPageNoFormatted","doc":"<p>Returns the current group page number formatted as a string.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_PageNoFormatted","name":"TCPDF::PageNoFormatted","doc":"<p>Returns the current page number formatted as a string.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putocg","name":"TCPDF::_putocg","doc":"<p>Put pdf layers.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_startLayer","name":"TCPDF::startLayer","doc":"<p>Start a new pdf layer.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_endLayer","name":"TCPDF::endLayer","doc":"<p>End the current PDF layer.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setVisibility","name":"TCPDF::setVisibility","doc":"<p>Set the visibility of the successive elements.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addExtGState","name":"TCPDF::addExtGState","doc":"<p>Add transparency parameters to the current extgstate</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setExtGState","name":"TCPDF::setExtGState","doc":"<p>Add an extgstate</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putextgstates","name":"TCPDF::_putextgstates","doc":"<p>Put extgstates for object transparency</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setOverprint","name":"TCPDF::setOverprint","doc":"<p>Set overprint mode for stroking (OP) and non-stroking (op) painting operations.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getOverprint","name":"TCPDF::getOverprint","doc":"<p>Get the overprint mode array (OP, op, OPM).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setAlpha","name":"TCPDF::setAlpha","doc":"<p>Set alpha for stroking (CA) and non-stroking (ca) operations.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getAlpha","name":"TCPDF::getAlpha","doc":"<p>Get the alpha mode array (CA, ca, BM, AIS).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setJPEGQuality","name":"TCPDF::setJPEGQuality","doc":"<p>Set the default JPEG compression quality (1-100)</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setDefaultTableColumns","name":"TCPDF::setDefaultTableColumns","doc":"<p>Set the default number of columns in a row for HTML tables.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setCellHeightRatio","name":"TCPDF::setCellHeightRatio","doc":"<p>Set the height of the cell (line height) respect the font height.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCellHeightRatio","name":"TCPDF::getCellHeightRatio","doc":"<p>return the height of cell repect font height.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPDFVersion","name":"TCPDF::setPDFVersion","doc":"<p>Set the PDF version (check PDF reference for valid values).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setViewerPreferences","name":"TCPDF::setViewerPreferences","doc":"<p>Set the viewer preferences dictionary controlling the way the document is to be presented on the screen or in print.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_colorRegistrationBar","name":"TCPDF::colorRegistrationBar","doc":"<p>Paints color transition registration bars</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_cropMark","name":"TCPDF::cropMark","doc":"<p>Paints crop marks.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_registrationMark","name":"TCPDF::registrationMark","doc":"<p>Paints a registration mark</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_registrationMarkCMYK","name":"TCPDF::registrationMarkCMYK","doc":"<p>Paints a CMYK registration mark</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_LinearGradient","name":"TCPDF::LinearGradient","doc":"<p>Paints a linear colour gradient.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_RadialGradient","name":"TCPDF::RadialGradient","doc":"<p>Paints a radial colour gradient.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_CoonsPatchMesh","name":"TCPDF::CoonsPatchMesh","doc":"<p>Paints a coons patch mesh.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Clip","name":"TCPDF::Clip","doc":"<p>Set a rectangular clipping area.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_Gradient","name":"TCPDF::Gradient","doc":"<p>Output gradient.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__putshaders","name":"TCPDF::_putshaders","doc":"<p>Output gradient shaders.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_PieSector","name":"TCPDF::PieSector","doc":"<p>Draw the sector of a circle.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_PieSectorXY","name":"TCPDF::PieSectorXY","doc":"<p>Draw the sector of an ellipse.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ImageEps","name":"TCPDF::ImageEps","doc":"<p>Embed vector-based Adobe Illustrator (AI) or AI-compatible EPS files.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setBarcode","name":"TCPDF::setBarcode","doc":"<p>Set document barcode.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getBarcode","name":"TCPDF::getBarcode","doc":"<p>Get current barcode.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_write1DBarcode","name":"TCPDF::write1DBarcode","doc":"<p>Print a Linear Barcode.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_write2DBarcode","name":"TCPDF::write2DBarcode","doc":"<p>Print 2D Barcode.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getMargins","name":"TCPDF::getMargins","doc":"<p>Returns an array containing current margins:</p>\n<ul>\n<li>$ret['left'] = left margin</li>\n<li>$ret['right'] = right margin</li>\n<li>$ret['top'] = top margin</li>\n<li>$ret['bottom'] = bottom margin</li>\n<li>$ret['header'] = header margin</li>\n<li>$ret['footer'] = footer margin</li>\n<li>$ret['cell'] = cell padding array</li>\n<li>$ret['padding_left'] = cell left padding</li>\n<li>$ret['padding_top'] = cell top padding</li>\n<li>$ret['padding_right'] = cell right padding</li>\n<li>$ret['padding_bottom'] = cell bottom padding</li>\n</ul>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getOriginalMargins","name":"TCPDF::getOriginalMargins","doc":"<p>Returns an array containing original margins:</p>\n<ul>\n<li>$ret['left'] = left margin</li>\n<li>$ret['right'] = right margin</li>\n</ul>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontSize","name":"TCPDF::getFontSize","doc":"<p>Returns the current font size.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontSizePt","name":"TCPDF::getFontSizePt","doc":"<p>Returns the current font size in points unit.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontFamily","name":"TCPDF::getFontFamily","doc":"<p>Returns the current font family name.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontStyle","name":"TCPDF::getFontStyle","doc":"<p>Returns the current font style.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_fixHTMLCode","name":"TCPDF::fixHTMLCode","doc":"<p>Cleanup HTML code (requires HTML Tidy library).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSBorderWidth","name":"TCPDF::getCSSBorderWidth","doc":"<p>Returns the border width from CSS property</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSBorderDashStyle","name":"TCPDF::getCSSBorderDashStyle","doc":"<p>Returns the border dash style from CSS property</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSBorderStyle","name":"TCPDF::getCSSBorderStyle","doc":"<p>Returns the border style array from CSS border properties</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSPadding","name":"TCPDF::getCSSPadding","doc":"<p>Get the internal Cell padding from CSS attribute.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSMargin","name":"TCPDF::getCSSMargin","doc":"<p>Get the internal Cell margin from CSS attribute.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSBorderMargin","name":"TCPDF::getCSSBorderMargin","doc":"<p>Get the border-spacing from CSS attribute.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSFontSpacing","name":"TCPDF::getCSSFontSpacing","doc":"<p>Returns the letter-spacing value from CSS value</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCSSFontStretching","name":"TCPDF::getCSSFontStretching","doc":"<p>Returns the percentage of font stretching from CSS value</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHTMLFontUnits","name":"TCPDF::getHTMLFontUnits","doc":"<p>Convert HTML string containing font size value to points</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHtmlDomArray","name":"TCPDF::getHtmlDomArray","doc":"<p>Returns the HTML DOM array.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getSpaceString","name":"TCPDF::getSpaceString","doc":"<p>Returns the string used to find spaces</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHashForTCPDFtagParams","name":"TCPDF::getHashForTCPDFtagParams","doc":"<p>Return an hash code used to ensure that the serialized data has been generated by this TCPDF instance.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_serializeTCPDFtagParameters","name":"TCPDF::serializeTCPDFtagParameters","doc":"<p>Serialize an array of parameters to be used with TCPDF tag in HTML code.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_unserializeTCPDFtagParameters","name":"TCPDF::unserializeTCPDFtagParameters","doc":"<p>Unserialize parameters to be used with TCPDF tag in HTML code.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_writeHTMLCell","name":"TCPDF::writeHTMLCell","doc":"<p>Prints a cell (rectangular area) with optional borders, background color and html text string.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_writeHTML","name":"TCPDF::writeHTML","doc":"<p>Allows to preserve some HTML formatting (limited support).<br />\nIMPORTANT: The HTML must be well formatted - try to clean-up it using an application like HTML-Tidy before submitting.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_openHTMLTagHandler","name":"TCPDF::openHTMLTagHandler","doc":"<p>Process opening tags.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_closeHTMLTagHandler","name":"TCPDF::closeHTMLTagHandler","doc":"<p>Process closing tags.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addHTMLVertSpace","name":"TCPDF::addHTMLVertSpace","doc":"<p>Add vertical spaces if needed.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getBorderStartPosition","name":"TCPDF::getBorderStartPosition","doc":"<p>Return the starting coordinates to draw an html border</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_drawHTMLTagBorder","name":"TCPDF::drawHTMLTagBorder","doc":"<p>Draw an HTML block border and fill</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setLIsymbol","name":"TCPDF::setLIsymbol","doc":"<p>Set the default bullet to be used as LI bullet symbol</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SetBooklet","name":"TCPDF::SetBooklet","doc":"<p>Set the booklet mode for double-sided pages.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_swapMargins","name":"TCPDF::swapMargins","doc":"<p>Swap the left and right margins.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHtmlVSpace","name":"TCPDF::setHtmlVSpace","doc":"<p>Set the vertical spaces for HTML tags.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setListIndentWidth","name":"TCPDF::setListIndentWidth","doc":"<p>Set custom width for list indentation.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setOpenCell","name":"TCPDF::setOpenCell","doc":"<p>Set the top/bottom cell sides to be open or closed when the cell cross the page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setHtmlLinksStyle","name":"TCPDF::setHtmlLinksStyle","doc":"<p>Set the color and font style for HTML links.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getHTMLUnitToUnits","name":"TCPDF::getHTMLUnitToUnits","doc":"<p>Convert HTML string containing value and unit of measure to user's units or points.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_putHtmlListBullet","name":"TCPDF::putHtmlListBullet","doc":"<p>Output an HTML list bullet or ordered item symbol</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getGraphicVars","name":"TCPDF::getGraphicVars","doc":"<p>Returns current graphic variables as array.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setGraphicVars","name":"TCPDF::setGraphicVars","doc":"<p>Set graphic variables.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outSaveGraphicsState","name":"TCPDF::_outSaveGraphicsState","doc":"<p>Outputs the &quot;save graphics state&quot; operator 'q'</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method__outRestoreGraphicsState","name":"TCPDF::_outRestoreGraphicsState","doc":"<p>Outputs the &quot;restore graphics state&quot; operator 'Q'</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setBuffer","name":"TCPDF::setBuffer","doc":"<p>Set buffer content (always append data).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_replaceBuffer","name":"TCPDF::replaceBuffer","doc":"<p>Replace the buffer content</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getBuffer","name":"TCPDF::getBuffer","doc":"<p>Get buffer content.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageBuffer","name":"TCPDF::setPageBuffer","doc":"<p>Set page buffer content.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageBuffer","name":"TCPDF::getPageBuffer","doc":"<p>Get page buffer content.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setImageBuffer","name":"TCPDF::setImageBuffer","doc":"<p>Set image buffer content.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setImageSubBuffer","name":"TCPDF::setImageSubBuffer","doc":"<p>Set image buffer content for a specified sub-key.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getImageBuffer","name":"TCPDF::getImageBuffer","doc":"<p>Get image buffer content.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFontBuffer","name":"TCPDF::setFontBuffer","doc":"<p>Set font buffer content.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFontSubBuffer","name":"TCPDF::setFontSubBuffer","doc":"<p>Set font buffer content.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontBuffer","name":"TCPDF::getFontBuffer","doc":"<p>Get font buffer content.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_movePage","name":"TCPDF::movePage","doc":"<p>Move a page to a previous position.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_deletePage","name":"TCPDF::deletePage","doc":"<p>Remove the specified page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_copyPage","name":"TCPDF::copyPage","doc":"<p>Clone the specified page to a new page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addTOC","name":"TCPDF::addTOC","doc":"<p>Output a Table of Content Index (TOC).</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addHTMLTOC","name":"TCPDF::addHTMLTOC","doc":"<p>Output a Table Of Content Index (TOC) using HTML templates.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_startTransaction","name":"TCPDF::startTransaction","doc":"<p>Stores a copy of the current TCPDF object used for undo operation.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_commitTransaction","name":"TCPDF::commitTransaction","doc":"<p>Delete the copy of the current TCPDF object used for undo operation.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_rollbackTransaction","name":"TCPDF::rollbackTransaction","doc":"<p>This method allows to undo the latest transaction by returning the latest saved TCPDF object with startTransaction().</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setEqualColumns","name":"TCPDF::setEqualColumns","doc":"<p>Set multiple columns of the same size</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_resetColumns","name":"TCPDF::resetColumns","doc":"<p>Remove columns and reset page margins.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setColumnsArray","name":"TCPDF::setColumnsArray","doc":"<p>Set columns array.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_selectColumn","name":"TCPDF::selectColumn","doc":"<p>Set position at a given column</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getColumn","name":"TCPDF::getColumn","doc":"<p>Return the current column number</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getNumberOfColumns","name":"TCPDF::getNumberOfColumns","doc":"<p>Return the current number of columns.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setTextRenderingMode","name":"TCPDF::setTextRenderingMode","doc":"<p>Set Text rendering mode.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setTextShadow","name":"TCPDF::setTextShadow","doc":"<p>Set parameters for drop shadow effect for text.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getTextShadow","name":"TCPDF::getTextShadow","doc":"<p>Return the text shadow parameters array.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_hyphenateWord","name":"TCPDF::hyphenateWord","doc":"<p>Returns an array of chars containing soft hyphens.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_hyphenateText","name":"TCPDF::hyphenateText","doc":"<p>Returns text with soft hyphens.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setRasterizeVectorImages","name":"TCPDF::setRasterizeVectorImages","doc":"<p>Enable/disable rasterization of vector images using ImageMagick library.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFontSubsetting","name":"TCPDF::setFontSubsetting","doc":"<p>Enable or disable default option for font subsetting.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontSubsetting","name":"TCPDF::getFontSubsetting","doc":"<p>Return the default option for font subsetting.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_stringLeftTrim","name":"TCPDF::stringLeftTrim","doc":"<p>Left trim the input string</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_stringRightTrim","name":"TCPDF::stringRightTrim","doc":"<p>Right trim the input string</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_stringTrim","name":"TCPDF::stringTrim","doc":"<p>Trim the input string</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_isUnicodeFont","name":"TCPDF::isUnicodeFont","doc":"<p>Return true if the current font is unicode type.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontFamilyName","name":"TCPDF::getFontFamilyName","doc":"<p>Return normalized font name</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_startTemplate","name":"TCPDF::startTemplate","doc":"<p>Start a new XObject Template.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_endTemplate","name":"TCPDF::endTemplate","doc":"<p>End the current XObject Template started with startTemplate() and restore the previous graphic state.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_printTemplate","name":"TCPDF::printTemplate","doc":"<p>Print an XObject Template.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFontStretching","name":"TCPDF::setFontStretching","doc":"<p>Set the percentage of character stretching.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontStretching","name":"TCPDF::getFontStretching","doc":"<p>Get the percentage of character stretching.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setFontSpacing","name":"TCPDF::setFontSpacing","doc":"<p>Set the amount to increase or decrease the space between characters in a text.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getFontSpacing","name":"TCPDF::getFontSpacing","doc":"<p>Get the amount to increase or decrease the space between characters in a text.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getPageRegions","name":"TCPDF::getPageRegions","doc":"<p>Return an array of no-write page regions</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setPageRegions","name":"TCPDF::setPageRegions","doc":"<p>Set no-write regions on page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_addPageRegion","name":"TCPDF::addPageRegion","doc":"<p>Add a single no-write region on selected page.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_removePageRegion","name":"TCPDF::removePageRegion","doc":"<p>Remove a single no-write region.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_checkPageRegions","name":"TCPDF::checkPageRegions","doc":"<p>Check page for no-write regions and adapt current coordinates and page margins if necessary.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_ImageSVG","name":"TCPDF::ImageSVG","doc":"<p>Embedd a Scalable Vector Graphics (SVG) image.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_convertSVGtMatrix","name":"TCPDF::convertSVGtMatrix","doc":"<p>Convert SVG transformation matrix to PDF.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SVGTransform","name":"TCPDF::SVGTransform","doc":"<p>Apply SVG graphic transformation matrix.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_setSVGStyles","name":"TCPDF::setSVGStyles","doc":"<p>Apply the requested SVG styles (<strong><em> TO BE COMPLETED </em></strong>)</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_SVGPath","name":"TCPDF::SVGPath","doc":"<p>Draws an SVG path</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_removeTagNamespace","name":"TCPDF::removeTagNamespace","doc":"<p>Return the tag name without the namespace</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_startSVGElementHandler","name":"TCPDF::startSVGElementHandler","doc":"<p>Sets the opening SVG element handler function for the XML parser. (<strong><em> TO BE COMPLETED </em></strong>)</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_endSVGElementHandler","name":"TCPDF::endSVGElementHandler","doc":"<p>Sets the closing SVG element handler function for the XML parser.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_segSVGContentHandler","name":"TCPDF::segSVGContentHandler","doc":"<p>Sets the character data handler function for the XML parser.</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_getCachedFileContents","name":"TCPDF::getCachedFileContents","doc":"<p>Keeps files in memory, so it doesn't need to downloaded everytime in a loop</p>"},
        {"type":"Method","fromName":"TCPDF","fromLink":"TCPDF.html","link":"TCPDF.html#method_fileExists","name":"TCPDF::fileExists","doc":"<p>Avoid multiple calls to an external server to see if a file exists</p>"},
            
                    {"type":"Class","link":"TCPDF2DBarcode.html","name":"TCPDF2DBarcode","doc":""},
                                {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method___construct","name":"TCPDF2DBarcode::__construct","doc":"<p>This is the class constructor.</p>"},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_getBarcodeArray","name":"TCPDF2DBarcode::getBarcodeArray","doc":"<p>Return an array representations of barcode.</p>"},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_getBarcodeSVG","name":"TCPDF2DBarcode::getBarcodeSVG","doc":"<p>Send barcode as SVG image object to the standard output.</p>"},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_getBarcodeSVGcode","name":"TCPDF2DBarcode::getBarcodeSVGcode","doc":"<p>Return a SVG string representation of barcode.</p>"},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_getBarcodeHTML","name":"TCPDF2DBarcode::getBarcodeHTML","doc":"<p>Return an HTML representation of barcode.</p>"},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_getBarcodePNG","name":"TCPDF2DBarcode::getBarcodePNG","doc":"<p>Send a PNG image representation of barcode (requires GD or Imagick library).</p>"},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_getBarcodePngData","name":"TCPDF2DBarcode::getBarcodePngData","doc":"<p>Return a PNG image representation of barcode (requires GD or Imagick library).</p>"},
        {"type":"Method","fromName":"TCPDF2DBarcode","fromLink":"TCPDF2DBarcode.html","link":"TCPDF2DBarcode.html#method_setBarcode","name":"TCPDF2DBarcode::setBarcode","doc":"<p>Set the barcode.</p>"},
            
                    {"type":"Class","link":"TCPDFBarcode.html","name":"TCPDFBarcode","doc":""},
                                {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method___construct","name":"TCPDFBarcode::__construct","doc":"<p>This is the class constructor.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_getBarcodeArray","name":"TCPDFBarcode::getBarcodeArray","doc":"<p>Return an array representations of barcode.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_getBarcodeSVG","name":"TCPDFBarcode::getBarcodeSVG","doc":"<p>Send barcode as SVG image object to the standard output.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_getBarcodeSVGcode","name":"TCPDFBarcode::getBarcodeSVGcode","doc":"<p>Return a SVG string representation of barcode.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_getBarcodeHTML","name":"TCPDFBarcode::getBarcodeHTML","doc":"<p>Return an HTML representation of barcode.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_getBarcodePNG","name":"TCPDFBarcode::getBarcodePNG","doc":"<p>Send a PNG image representation of barcode (requires GD or Imagick library).</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_getBarcodePngData","name":"TCPDFBarcode::getBarcodePngData","doc":"<p>Return a PNG image representation of barcode (requires GD or Imagick library).</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_setBarcode","name":"TCPDFBarcode::setBarcode","doc":"<p>Set the barcode.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_code39","name":"TCPDFBarcode::barcode_code39","doc":"<p>CODE 39 - ANSI MH10.8M-1983 - USD-3 - 3 of 9.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_encode_code39_ext","name":"TCPDFBarcode::encode_code39_ext","doc":"<p>Encode a string to be used for CODE 39 Extended mode.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_checksum_code39","name":"TCPDFBarcode::checksum_code39","doc":"<p>Calculate CODE 39 checksum (modulo 43).</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_code93","name":"TCPDFBarcode::barcode_code93","doc":"<p>CODE 93 - USS-93\nCompact code similar to Code 39</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_checksum_code93","name":"TCPDFBarcode::checksum_code93","doc":"<p>Calculate CODE 93 checksum (modulo 47).</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_checksum_s25","name":"TCPDFBarcode::checksum_s25","doc":"<p>Checksum for standard 2 of 5 barcodes.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_msi","name":"TCPDFBarcode::barcode_msi","doc":"<p>MSI.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_s25","name":"TCPDFBarcode::barcode_s25","doc":"<p>Standard 2 of 5 barcodes.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_binseq_to_array","name":"TCPDFBarcode::binseq_to_array","doc":"<p>Convert binary barcode sequence to WarnockPDF barcode array.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_i25","name":"TCPDFBarcode::barcode_i25","doc":"<p>Interleaved 2 of 5 barcodes.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_c128","name":"TCPDFBarcode::barcode_c128","doc":"<p>C128 barcodes.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_get128ABsequence","name":"TCPDFBarcode::get128ABsequence","doc":"<p>Split text code in A/B sequence for 128 code</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_eanupc","name":"TCPDFBarcode::barcode_eanupc","doc":"<p>EAN13 and UPC-A barcodes.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_eanext","name":"TCPDFBarcode::barcode_eanext","doc":"<p>UPC-Based Extensions\n2-Digit Ext.: Used to indicate magazines and newspaper issue numbers\n5-Digit Ext.: Used to mark suggested retail price of books</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_postnet","name":"TCPDFBarcode::barcode_postnet","doc":"<p>POSTNET and PLANET barcodes.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_rms4cc","name":"TCPDFBarcode::barcode_rms4cc","doc":"<p>RMS4CC - CBC - KIX\nRMS4CC (Royal Mail 4-state Customer Code) - CBC (Customer Bar Code) - KIX (Klant index - Customer index)\nRM4SCC is the name of the barcode symbology used by the Royal Mail for its Cleanmail service.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_codabar","name":"TCPDFBarcode::barcode_codabar","doc":"<p>CODABAR barcodes.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_code11","name":"TCPDFBarcode::barcode_code11","doc":"<p>CODE11 barcodes.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_pharmacode","name":"TCPDFBarcode::barcode_pharmacode","doc":"<p>Pharmacode\nContains digits (0 to 9)</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_pharmacode2t","name":"TCPDFBarcode::barcode_pharmacode2t","doc":"<p>Pharmacode two-track\nContains digits (0 to 9)</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_imb","name":"TCPDFBarcode::barcode_imb","doc":"<p>IMB - Intelligent Mail Barcode - Onecode - USPS-B-3200\n(requires PHP bcmath extension)\nIntelligent Mail barcode is a 65-bar code for use on mail in the United States.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_barcode_imb_pre","name":"TCPDFBarcode::barcode_imb_pre","doc":"<p>IMB - Intelligent Mail Barcode - Onecode - USPS-B-3200</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_dec_to_hex","name":"TCPDFBarcode::dec_to_hex","doc":"<p>Convert large integer number to hexadecimal representation.</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_hex_to_dec","name":"TCPDFBarcode::hex_to_dec","doc":"<p>Convert large hexadecimal number to decimal representation (string).</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_imb_crc11fcs","name":"TCPDFBarcode::imb_crc11fcs","doc":"<p>Intelligent Mail Barcode calculation of Frame Check Sequence</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_imb_reverse_us","name":"TCPDFBarcode::imb_reverse_us","doc":"<p>Reverse unsigned short value</p>"},
        {"type":"Method","fromName":"TCPDFBarcode","fromLink":"TCPDFBarcode.html","link":"TCPDFBarcode.html#method_imb_tables","name":"TCPDFBarcode::imb_tables","doc":"<p>generate Nof13 tables used for Intelligent Mail Barcode</p>"},
            
                    {"type":"Class","link":"TCPDF_COLORS.html","name":"TCPDF_COLORS","doc":""},
                                {"type":"Method","fromName":"TCPDF_COLORS","fromLink":"TCPDF_COLORS.html","link":"TCPDF_COLORS.html#method_getSpotColor","name":"TCPDF_COLORS::getSpotColor","doc":"<p>Return the Spot color array.</p>"},
        {"type":"Method","fromName":"TCPDF_COLORS","fromLink":"TCPDF_COLORS.html","link":"TCPDF_COLORS.html#method_convertHTMLColorToDec","name":"TCPDF_COLORS::convertHTMLColorToDec","doc":"<p>Returns an array (RGB or CMYK) from an html color name, or a six-digit (i.e. #3FE5AA), or three-digit (i.e. #7FF) hexadecimal color, or a javascript color array, or javascript color name.</p>"},
        {"type":"Method","fromName":"TCPDF_COLORS","fromLink":"TCPDF_COLORS.html","link":"TCPDF_COLORS.html#method_getColorStringFromArray","name":"TCPDF_COLORS::getColorStringFromArray","doc":"<p>Convert a color array into a string representation.</p>"},
        {"type":"Method","fromName":"TCPDF_COLORS","fromLink":"TCPDF_COLORS.html","link":"TCPDF_COLORS.html#method__JScolor","name":"TCPDF_COLORS::_JScolor","doc":"<p>Convert color to javascript color.</p>"},
            
                    {"type":"Class","link":"TCPDF_FILTERS.html","name":"TCPDF_FILTERS","doc":""},
                                {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_getAvailableFilters","name":"TCPDF_FILTERS::getAvailableFilters","doc":"<p>Get a list of available decoding filters.</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_decodeFilter","name":"TCPDF_FILTERS::decodeFilter","doc":"<p>Decode data using the specified filter type.</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_decodeFilterStandard","name":"TCPDF_FILTERS::decodeFilterStandard","doc":"<p>Standard\nDefault decoding filter (leaves data unchanged).</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_decodeFilterASCIIHexDecode","name":"TCPDF_FILTERS::decodeFilterASCIIHexDecode","doc":"<p>ASCIIHexDecode\nDecodes data encoded in an ASCII hexadecimal representation, reproducing the original binary data.</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_decodeFilterASCII85Decode","name":"TCPDF_FILTERS::decodeFilterASCII85Decode","doc":"<p>ASCII85Decode\nDecodes data encoded in an ASCII base-85 representation, reproducing the original binary data.</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_decodeFilterLZWDecode","name":"TCPDF_FILTERS::decodeFilterLZWDecode","doc":"<p>LZWDecode\nDecompresses data encoded using the LZW (Lempel-Ziv-Welch) adaptive compression method, reproducing the original text or binary data.</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_decodeFilterFlateDecode","name":"TCPDF_FILTERS::decodeFilterFlateDecode","doc":"<p>FlateDecode\nDecompresses data encoded using the zlib/deflate compression method, reproducing the original text or binary data.</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_decodeFilterRunLengthDecode","name":"TCPDF_FILTERS::decodeFilterRunLengthDecode","doc":"<p>RunLengthDecode\nDecompresses data encoded using a byte-oriented run-length encoding algorithm.</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_decodeFilterCCITTFaxDecode","name":"TCPDF_FILTERS::decodeFilterCCITTFaxDecode","doc":"<p>CCITTFaxDecode (NOT IMPLEMETED - RETURN AN EXCEPTION)\nDecompresses data encoded using the CCITT facsimile standard, reproducing the original data (typically monochrome image data at 1 bit per pixel).</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_decodeFilterJBIG2Decode","name":"TCPDF_FILTERS::decodeFilterJBIG2Decode","doc":"<p>JBIG2Decode (NOT IMPLEMETED - RETURN AN EXCEPTION)\nDecompresses data encoded using the JBIG2 standard, reproducing the original monochrome (1 bit per pixel) image data (or an approximation of that data).</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_decodeFilterDCTDecode","name":"TCPDF_FILTERS::decodeFilterDCTDecode","doc":"<p>DCTDecode (NOT IMPLEMETED - RETURN AN EXCEPTION)\nDecompresses data encoded using a DCT (discrete cosine transform) technique based on the JPEG standard, reproducing image sample data that approximates the original data.</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_decodeFilterJPXDecode","name":"TCPDF_FILTERS::decodeFilterJPXDecode","doc":"<p>JPXDecode (NOT IMPLEMETED - RETURN AN EXCEPTION)\nDecompresses data encoded using the wavelet-based JPEG2000 standard, reproducing the original image data.</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_decodeFilterCrypt","name":"TCPDF_FILTERS::decodeFilterCrypt","doc":"<p>Crypt (NOT IMPLEMETED - RETURN AN EXCEPTION)\nDecrypts data encrypted by a security handler, reproducing the data as it was before encryption.</p>"},
        {"type":"Method","fromName":"TCPDF_FILTERS","fromLink":"TCPDF_FILTERS.html","link":"TCPDF_FILTERS.html#method_Error","name":"TCPDF_FILTERS::Error","doc":"<p>Throw an exception.</p>"},
            
                    {"type":"Class","link":"TCPDF_FONTS.html","name":"TCPDF_FONTS","doc":""},
                                {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_addTTFfont","name":"TCPDF_FONTS::addTTFfont","doc":"<p>Convert and add the selected TrueType or Type1 font to the fonts folder (that must be writeable).</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method__getTTFtableChecksum","name":"TCPDF_FONTS::_getTTFtableChecksum","doc":"<p>Returs the checksum of a TTF table.</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method__getTrueTypeFontSubset","name":"TCPDF_FONTS::_getTrueTypeFontSubset","doc":"<p>Returns a subset of the TrueType font data without the unused glyphs.</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method__putfontwidths","name":"TCPDF_FONTS::_putfontwidths","doc":"<p>Outputs font widths</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_updateCIDtoGIDmap","name":"TCPDF_FONTS::updateCIDtoGIDmap","doc":"<p>Update the CIDToGIDMap string with a new value.</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method__getfontpath","name":"TCPDF_FONTS::_getfontpath","doc":"<p>Return fonts path</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_getFontFullPath","name":"TCPDF_FONTS::getFontFullPath","doc":"<p>Return font full path</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_getFontRefSize","name":"TCPDF_FONTS::getFontRefSize","doc":"<p>Get a reference font size.</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_unichr","name":"TCPDF_FONTS::unichr","doc":"<p>Returns the unicode caracter specified by the value</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_unichrUnicode","name":"TCPDF_FONTS::unichrUnicode","doc":"<p>Returns the unicode caracter specified by UTF-8 value</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_unichrASCII","name":"TCPDF_FONTS::unichrASCII","doc":"<p>Returns the unicode caracter specified by ASCII value</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_arrUTF8ToUTF16BE","name":"TCPDF_FONTS::arrUTF8ToUTF16BE","doc":"<p>Converts array of UTF-8 characters to UTF16-BE string.<br>\nBased on: <a href=\"http://www.faqs.org/rfcs/rfc2781.html\">http://www.faqs.org/rfcs/rfc2781.html</a></p>\n<pre>\n  Encoding UTF-16:"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_UTF8ArrayToUniArray","name":"TCPDF_FONTS::UTF8ArrayToUniArray","doc":"<p>Convert an array of UTF8 values to array of unicode characters</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_UTF8ArrSubString","name":"TCPDF_FONTS::UTF8ArrSubString","doc":"<p>Extract a slice of the $strarr array and return it as string.</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_UniArrSubString","name":"TCPDF_FONTS::UniArrSubString","doc":"<p>Extract a slice of the $uniarr array and return it as string.</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_UTF8ArrToLatin1Arr","name":"TCPDF_FONTS::UTF8ArrToLatin1Arr","doc":"<p>Converts UTF-8 characters array to array of Latin1 characters array<br></p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_UTF8ArrToLatin1","name":"TCPDF_FONTS::UTF8ArrToLatin1","doc":"<p>Converts UTF-8 characters array to Latin1 string<br></p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_uniord","name":"TCPDF_FONTS::uniord","doc":"<p>Converts UTF-8 character to integer value.<br>\nUses the getUniord() method if the value is not cached.</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_getUniord","name":"TCPDF_FONTS::getUniord","doc":"<p>Converts UTF-8 character to integer value.<br>\nInvalid byte sequences will be replaced with 0xFFFD (replacement character)<br>\nBased on: <a href=\"http://www.faqs.org/rfcs/rfc3629.html\">http://www.faqs.org/rfcs/rfc3629.html</a></p>\n<pre>\n   Char. number range  |        UTF-8 octet sequence\n      (hexadecimal)    |              (binary)\n   --------------------+-----------------------------------------------\n   0000 0000-0000 007F | 0xxxxxxx\n   0000 0080-0000 07FF | 110xxxxx 10xxxxxx\n   0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx\n   0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx\n   ---------------------------------------------------------------------"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_UTF8StringToArray","name":"TCPDF_FONTS::UTF8StringToArray","doc":"<p>Converts UTF-8 strings to codepoints array.<br>\nInvalid byte sequences will be replaced with 0xFFFD (replacement character)<br></p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_UTF8ToLatin1","name":"TCPDF_FONTS::UTF8ToLatin1","doc":"<p>Converts UTF-8 strings to Latin1 when using the standard 14 core fonts.<br></p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_UTF8ToUTF16BE","name":"TCPDF_FONTS::UTF8ToUTF16BE","doc":"<p>Converts UTF-8 strings to UTF16-BE.<br></p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_utf8StrRev","name":"TCPDF_FONTS::utf8StrRev","doc":"<p>Reverse the RLT substrings using the Bidirectional Algorithm (<a href=\"http://unicode.org/reports/tr9/\">http://unicode.org/reports/tr9/</a>).</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_utf8StrArrRev","name":"TCPDF_FONTS::utf8StrArrRev","doc":"<p>Reverse the RLT substrings array using the Bidirectional Algorithm (<a href=\"http://unicode.org/reports/tr9/\">http://unicode.org/reports/tr9/</a>).</p>"},
        {"type":"Method","fromName":"TCPDF_FONTS","fromLink":"TCPDF_FONTS.html","link":"TCPDF_FONTS.html#method_utf8Bidi","name":"TCPDF_FONTS::utf8Bidi","doc":"<p>Reverse the RLT substrings using the Bidirectional Algorithm (<a href=\"http://unicode.org/reports/tr9/\">http://unicode.org/reports/tr9/</a>).</p>"},
            
                    {"type":"Class","link":"TCPDF_FONT_DATA.html","name":"TCPDF_FONT_DATA","doc":""},
                
                    {"type":"Class","link":"TCPDF_IMAGES.html","name":"TCPDF_IMAGES","doc":""},
                                {"type":"Method","fromName":"TCPDF_IMAGES","fromLink":"TCPDF_IMAGES.html","link":"TCPDF_IMAGES.html#method_getImageFileType","name":"TCPDF_IMAGES::getImageFileType","doc":"<p>Return the image type given the file name or array returned by getimagesize() function.</p>"},
        {"type":"Method","fromName":"TCPDF_IMAGES","fromLink":"TCPDF_IMAGES.html","link":"TCPDF_IMAGES.html#method_setGDImageTransparency","name":"TCPDF_IMAGES::setGDImageTransparency","doc":"<p>Set the transparency for the given GD image.</p>"},
        {"type":"Method","fromName":"TCPDF_IMAGES","fromLink":"TCPDF_IMAGES.html","link":"TCPDF_IMAGES.html#method__toPNG","name":"TCPDF_IMAGES::_toPNG","doc":"<p>Convert the loaded image to a PNG and then return a structure for the PDF creator.</p>"},
        {"type":"Method","fromName":"TCPDF_IMAGES","fromLink":"TCPDF_IMAGES.html","link":"TCPDF_IMAGES.html#method__toJPEG","name":"TCPDF_IMAGES::_toJPEG","doc":"<p>Convert the loaded image to a JPEG and then return a structure for the PDF creator.</p>"},
        {"type":"Method","fromName":"TCPDF_IMAGES","fromLink":"TCPDF_IMAGES.html","link":"TCPDF_IMAGES.html#method__parsejpeg","name":"TCPDF_IMAGES::_parsejpeg","doc":"<p>Extract info from a JPEG file without using the GD library.</p>"},
        {"type":"Method","fromName":"TCPDF_IMAGES","fromLink":"TCPDF_IMAGES.html","link":"TCPDF_IMAGES.html#method__parsepng","name":"TCPDF_IMAGES::_parsepng","doc":"<p>Extract info from a PNG file without using the GD library.</p>"},
            
                    {"type":"Class","link":"TCPDF_IMPORT.html","name":"TCPDF_IMPORT","doc":""},
                                {"type":"Method","fromName":"TCPDF_IMPORT","fromLink":"TCPDF_IMPORT.html","link":"TCPDF_IMPORT.html#method_importPDF","name":"TCPDF_IMPORT::importPDF","doc":"<p>Import an existing PDF document</p>"},
            
                    {"type":"Class","link":"TCPDF_PARSER.html","name":"TCPDF_PARSER","doc":""},
                                {"type":"Method","fromName":"TCPDF_PARSER","fromLink":"TCPDF_PARSER.html","link":"TCPDF_PARSER.html#method___construct","name":"TCPDF_PARSER::__construct","doc":"<p>Parse a PDF document an return an array of objects.</p>"},
        {"type":"Method","fromName":"TCPDF_PARSER","fromLink":"TCPDF_PARSER.html","link":"TCPDF_PARSER.html#method_setConfig","name":"TCPDF_PARSER::setConfig","doc":"<p>Set the configuration parameters.</p>"},
        {"type":"Method","fromName":"TCPDF_PARSER","fromLink":"TCPDF_PARSER.html","link":"TCPDF_PARSER.html#method_getParsedData","name":"TCPDF_PARSER::getParsedData","doc":"<p>Return an array of parsed PDF document objects.</p>"},
        {"type":"Method","fromName":"TCPDF_PARSER","fromLink":"TCPDF_PARSER.html","link":"TCPDF_PARSER.html#method_getXrefData","name":"TCPDF_PARSER::getXrefData","doc":"<p>Get Cross-Reference (xref) table and trailer data from PDF document data.</p>"},
        {"type":"Method","fromName":"TCPDF_PARSER","fromLink":"TCPDF_PARSER.html","link":"TCPDF_PARSER.html#method_decodeXref","name":"TCPDF_PARSER::decodeXref","doc":"<p>Decode the Cross-Reference section</p>"},
        {"type":"Method","fromName":"TCPDF_PARSER","fromLink":"TCPDF_PARSER.html","link":"TCPDF_PARSER.html#method_decodeXrefStream","name":"TCPDF_PARSER::decodeXrefStream","doc":"<p>Decode the Cross-Reference Stream section</p>"},
        {"type":"Method","fromName":"TCPDF_PARSER","fromLink":"TCPDF_PARSER.html","link":"TCPDF_PARSER.html#method_getRawObject","name":"TCPDF_PARSER::getRawObject","doc":"<p>Get object type, raw value and offset to next object</p>"},
        {"type":"Method","fromName":"TCPDF_PARSER","fromLink":"TCPDF_PARSER.html","link":"TCPDF_PARSER.html#method_getIndirectObject","name":"TCPDF_PARSER::getIndirectObject","doc":"<p>Get content of indirect object.</p>"},
        {"type":"Method","fromName":"TCPDF_PARSER","fromLink":"TCPDF_PARSER.html","link":"TCPDF_PARSER.html#method_getObjectVal","name":"TCPDF_PARSER::getObjectVal","doc":"<p>Get the content of object, resolving indect object reference if necessary.</p>"},
        {"type":"Method","fromName":"TCPDF_PARSER","fromLink":"TCPDF_PARSER.html","link":"TCPDF_PARSER.html#method_decodeStream","name":"TCPDF_PARSER::decodeStream","doc":"<p>Decode the specified stream.</p>"},
        {"type":"Method","fromName":"TCPDF_PARSER","fromLink":"TCPDF_PARSER.html","link":"TCPDF_PARSER.html#method_Error","name":"TCPDF_PARSER::Error","doc":"<p>Throw an exception or print an error message and die if the K_TCPDF_PARSER_THROW_EXCEPTION_ERROR constant is set to true.</p>"},
            
                    {"type":"Class","link":"TCPDF_STATIC.html","name":"TCPDF_STATIC","doc":""},
                                {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getTCPDFVersion","name":"TCPDF_STATIC::getTCPDFVersion","doc":"<p>Return the current TCPDF version.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getTCPDFProducer","name":"TCPDF_STATIC::getTCPDFProducer","doc":"<p>Return the current TCPDF producer.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_set_mqr","name":"TCPDF_STATIC::set_mqr","doc":"<p>Sets the current active configuration setting of magic_quotes_runtime (if the set_magic_quotes_runtime function exist)</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_get_mqr","name":"TCPDF_STATIC::get_mqr","doc":"<p>Gets the current active configuration setting of magic_quotes_runtime (if the get_magic_quotes_runtime function exist)</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_isValidURL","name":"TCPDF_STATIC::isValidURL","doc":"<p>Check if the URL exist.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_removeSHY","name":"TCPDF_STATIC::removeSHY","doc":"<p>Removes SHY characters from text.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getBorderMode","name":"TCPDF_STATIC::getBorderMode","doc":"<p>Get the border mode accounting for multicell position (opens bottom side of multicell crossing pages)</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_empty_string","name":"TCPDF_STATIC::empty_string","doc":"<p>Determine whether a string is empty.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getObjFilename","name":"TCPDF_STATIC::getObjFilename","doc":"<p>Returns a temporary filename for caching object on filesystem.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__escape","name":"TCPDF_STATIC::_escape","doc":"<p>Add &quot;\\&quot; before &quot;\\&quot;, &quot;(&quot; and &quot;)&quot;</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__escapeXML","name":"TCPDF_STATIC::_escapeXML","doc":"<p>Escape some special characters (&lt; &gt; &amp;) for XML output.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_objclone","name":"TCPDF_STATIC::objclone","doc":"<p>Creates a copy of a class object</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_sendOutputData","name":"TCPDF_STATIC::sendOutputData","doc":"<p>Output input data and compress it if possible.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_replacePageNumAliases","name":"TCPDF_STATIC::replacePageNumAliases","doc":"<p>Replace page number aliases with number.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getTimestamp","name":"TCPDF_STATIC::getTimestamp","doc":"<p>Returns timestamp in seconds from formatted date-time.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getFormattedDate","name":"TCPDF_STATIC::getFormattedDate","doc":"<p>Returns a formatted date-time.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getRandomSeed","name":"TCPDF_STATIC::getRandomSeed","doc":"<p>Returns a string containing random data to be used as a seed for encryption methods.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__md5_16","name":"TCPDF_STATIC::_md5_16","doc":"<p>Encrypts a string using MD5 and returns it's value as a binary string.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__AES","name":"TCPDF_STATIC::_AES","doc":"<p>Returns the input text encrypted using AES algorithm and the specified key.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__AESnopad","name":"TCPDF_STATIC::_AESnopad","doc":"<p>Returns the input text encrypted using AES algorithm and the specified key.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__RC4","name":"TCPDF_STATIC::_RC4","doc":"<p>Returns the input text encrypted using RC4 algorithm and the specified key.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getUserPermissionCode","name":"TCPDF_STATIC::getUserPermissionCode","doc":"<p>Return the permission code used on encryption (P value).</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_convertHexStringToString","name":"TCPDF_STATIC::convertHexStringToString","doc":"<p>Convert hexadecimal string to string</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_convertStringToHexString","name":"TCPDF_STATIC::convertStringToHexString","doc":"<p>Convert string to hexadecimal string (byte string)</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getEncPermissionsString","name":"TCPDF_STATIC::getEncPermissionsString","doc":"<p>Convert encryption P value to a string of bytes, low-order byte first.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_encodeNameObject","name":"TCPDF_STATIC::encodeNameObject","doc":"<p>Encode a name object.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getAnnotOptFromJSProp","name":"TCPDF_STATIC::getAnnotOptFromJSProp","doc":"<p>Convert JavaScript form fields properties array to Annotation Properties array.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_formatPageNumber","name":"TCPDF_STATIC::formatPageNumber","doc":"<p>Format the page numbers.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_formatTOCPageNumber","name":"TCPDF_STATIC::formatTOCPageNumber","doc":"<p>Format the page numbers on the Table Of Content.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_extractCSSproperties","name":"TCPDF_STATIC::extractCSSproperties","doc":"<p>Extracts the CSS properties from a CSS string.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_fixHTMLCode","name":"TCPDF_STATIC::fixHTMLCode","doc":"<p>Cleanup HTML code (requires HTML Tidy library).</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_isValidCSSSelectorForTag","name":"TCPDF_STATIC::isValidCSSSelectorForTag","doc":"<p>Returns true if the CSS selector is valid for the selected HTML tag</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getCSSdataArray","name":"TCPDF_STATIC::getCSSdataArray","doc":"<p>Returns the styles array that apply for the selected HTML tag.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getTagStyleFromCSSarray","name":"TCPDF_STATIC::getTagStyleFromCSSarray","doc":"<p>Compact CSS data array into single string.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_intToRoman","name":"TCPDF_STATIC::intToRoman","doc":"<p>Returns the Roman representation of an integer number</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_revstrpos","name":"TCPDF_STATIC::revstrpos","doc":"<p>Find position of last occurrence of a substring in a string</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getHyphenPatternsFromTEX","name":"TCPDF_STATIC::getHyphenPatternsFromTEX","doc":"<p>Returns an array of hyphenation patterns.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getPathPaintOperator","name":"TCPDF_STATIC::getPathPaintOperator","doc":"<p>Get the Path-Painting Operators.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getTransformationMatrixProduct","name":"TCPDF_STATIC::getTransformationMatrixProduct","doc":"<p>Get the product of two SVG tranformation matrices</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getSVGTransformMatrix","name":"TCPDF_STATIC::getSVGTransformMatrix","doc":"<p>Get the tranformation matrix from SVG transform attribute</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getVectorsAngle","name":"TCPDF_STATIC::getVectorsAngle","doc":"<p>Returns the angle in radiants between two vectors</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_pregSplit","name":"TCPDF_STATIC::pregSplit","doc":"<p>Split string by a regular expression.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_fopenLocal","name":"TCPDF_STATIC::fopenLocal","doc":"<p>Wrapper to use fopen only with local files</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_url_exists","name":"TCPDF_STATIC::url_exists","doc":"<p>Check if the URL exist.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_encodeUrlQuery","name":"TCPDF_STATIC::encodeUrlQuery","doc":"<p>Encode query params in URL</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_file_exists","name":"TCPDF_STATIC::file_exists","doc":"<p>Wrapper for file_exists.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_fileGetContents","name":"TCPDF_STATIC::fileGetContents","doc":"<p>Reads entire file into a string.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getULONG","name":"TCPDF_STATIC::_getULONG","doc":"<p>Get ULONG from string (Big Endian 32-bit unsigned integer).</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getUSHORT","name":"TCPDF_STATIC::_getUSHORT","doc":"<p>Get USHORT from string (Big Endian 16-bit unsigned integer).</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getSHORT","name":"TCPDF_STATIC::_getSHORT","doc":"<p>Get SHORT from string (Big Endian 16-bit signed integer).</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getFWORD","name":"TCPDF_STATIC::_getFWORD","doc":"<p>Get FWORD from string (Big Endian 16-bit signed integer).</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getUFWORD","name":"TCPDF_STATIC::_getUFWORD","doc":"<p>Get UFWORD from string (Big Endian 16-bit unsigned integer).</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getFIXED","name":"TCPDF_STATIC::_getFIXED","doc":"<p>Get FIXED from string (32-bit signed fixed-point number (16.16).</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__getBYTE","name":"TCPDF_STATIC::_getBYTE","doc":"<p>Get BYTE from string (8-bit unsigned integer).</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_rfread","name":"TCPDF_STATIC::rfread","doc":"<p>Binary-safe and URL-safe file read.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method__freadint","name":"TCPDF_STATIC::_freadint","doc":"<p>Read a 4-byte (32 bit) integer from file.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getPageSizeFromFormat","name":"TCPDF_STATIC::getPageSizeFromFormat","doc":"<p>Get page dimensions from format name.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_setPageBoxes","name":"TCPDF_STATIC::setPageBoxes","doc":"<p>Set page boundaries.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_swapPageBoxCoordinates","name":"TCPDF_STATIC::swapPageBoxCoordinates","doc":"<p>Swap X and Y coordinates of page boxes (change page boxes orientation).</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getPageLayoutMode","name":"TCPDF_STATIC::getPageLayoutMode","doc":"<p>Get the canonical page layout mode.</p>"},
        {"type":"Method","fromName":"TCPDF_STATIC","fromLink":"TCPDF_STATIC.html","link":"TCPDF_STATIC.html#method_getPageMode","name":"TCPDF_STATIC::getPageMode","doc":"<p>Get the canonical page layout mode.</p>"},
            
                                // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Doctum = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Doctum.injectApiTree($('#api-tree'));
    });

    return root.Doctum;
})(window);

$(function() {

    
    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').on('click', function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Doctum.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


