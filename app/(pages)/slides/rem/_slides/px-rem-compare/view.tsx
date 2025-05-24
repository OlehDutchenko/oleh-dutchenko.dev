import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';

export function PxRemCompare() {
	return (
		<>
			<RemSlide transition="zoom-in" bgColor="dark" autoAnimate>
				<p>CSS &lt;length&gt; (distance value)</p>
				<table>
					<tbody>
						<Fragment component="tr">
							<th>Абсолютні</th>
							<th>та</th>
							<th>Відносні</th>
						</Fragment>
						<Fragment component="tr">
							<td>
								<code>cm</code> <code>mm</code> <br />
								<code>Q</code> <code>in</code> <br />
								<code>px</code> <code>pc</code> <code>pt</code>
							</td>
							<td>&nbsp;</td>
							<Fragment component="td">
								<code>cap</code> <code>lh</code> <code>ch</code>
								<br />
								<code>ic</code> <code>ex</code> <code>em</code>
							</Fragment>
						</Fragment>
						<Fragment component="tr">
							<td />
							<td>&nbsp;</td>
							<td>
								<code>rcap</code> <code>rlh</code>{' '}
								<code>rch</code>
								<br />
								<code>ric</code> <code>rex</code>{' '}
								<code>rem</code>
							</td>
						</Fragment>
					</tbody>
				</table>
			</RemSlide>

			<RemSlide bgColor="dark" transition={null} autoAnimate>
				<p>CSS &lt;length&gt; (distance value)</p>
				<table>
					<tbody>
						<tr>
							<th>Абсолют</th>
							<th>&nbsp;</th>
							<th>Відносність</th>
						</tr>
						<tr>
							<td>
								<big>
									<code>px</code>
								</big>
							</td>
							<td>&nbsp;</td>
							<td>
								<big>
									<code>rem</code>
								</big>
							</td>
						</tr>
					</tbody>
				</table>
			</RemSlide>

			<RemSlide bgColor="light" transition="slide-in zoom-out">
				<p id="p0">Використання в WEB типографії</p>
				<table style={{ fontSize: '0.7em', marginBottom: '2em' }}>
					<tbody>
						<tr>
							<th>Критерій</th>
							<th>
								<code>px</code>
							</th>
							<th>
								<code>rem</code>
							</th>
						</tr>
						<Fragment component="tr">
							<td>
								<b>Відносність</b>
							</td>
							<td>Ні</td>
							<td>Так</td>
						</Fragment>
						<Fragment component="tr">
							<td>
								<b>Контроль дизайну</b>
							</td>
							<td>Точний</td>
							<td>Відносний, більш адаптивний</td>
						</Fragment>
						<Fragment component="tr">
							<td>
								<b>Масштабування тексту</b>
							</td>
							<td>Немає</td>
							<td>Є</td>
						</Fragment>
						<Fragment component="tr">
							<td>
								<b>Сумісність з WCAG</b>
							</td>
							<td style={{ whiteSpace: 'nowrap' }}>
								Часто порушує
							</td>
							<td>Відповідає</td>
						</Fragment>
					</tbody>
				</table>
			</RemSlide>
		</>
	);
}
